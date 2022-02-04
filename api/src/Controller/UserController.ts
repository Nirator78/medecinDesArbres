import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../Entity/User";

import {PasswordKey} from '../Entity/PasswordKey';
import {MailService} from '../Service/MailService';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export class UserController {

    private userRepository = getRepository(User);
    private passwordKeyRepository = getRepository(PasswordKey);

    async all(request: Request, response: Response, next: NextFunction) {
        const users = await this.userRepository.find();
        return { status: 1, data: users } ;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request.body);
        const salt = bcrypt.genSaltSync(10);
        request.body.password = bcrypt.hashSync(request.body.password, salt);
        const user = await this.userRepository.save(request.body);
        let token = jwt.sign({ data: user },process.env.SECRET_TOKEN, { expiresIn: '1h' });
        console.log({ status: 1, data: user, token: token });
        return { status: 1, data: user, token: token };
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const user = await this.userRepository.save(request.body);
        return { status: 1, data: user } ;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let userToRemove = await this.userRepository.findOne(request.params.id);
            await this.userRepository.remove(userToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }

    async login(request: Request, response: Response, next: NextFunction) {
        let userLogin = await this.userRepository.findOne({ email: request.body.email});
        if(userLogin){
            const testPassword = await bcrypt.compare(request.body.password, userLogin.password);
            if(testPassword){
                let data;
                data = {user: userLogin};
                let token = jwt.sign({ data }, process.env.SECRET_TOKEN);
                return { status: 1, data: userLogin, token: token }
            }else{
                return { status: 0 };
            }
        }else{
            return { status: 0 };
        }
    }

    async forgotPasswordRequest(request: Request, response: Response, next: NextFunction) {
        const keygen = require("keygenerator");
        /**
         * Verif si request.body.email existe dans les users si oui faire le reste
         */
        const user = await this.userRepository.find({where: {email: request.body.email}});
        if(user.length){
            // Génération d'une clé unique
            const cleUnique = keygen._({forceLowercase: true});

            // Enregistrement de la clé unique dans la base de donnée
            const passwordKey = new PasswordKey();
            passwordKey.key = cleUnique;
            passwordKey.email = request.body.email;
            await this.passwordKeyRepository.save(passwordKey);

            // Création d'une url unique pour changer le mot de passe
            const lienUniquePassword = process.env.BASE_URL+'/password/'+cleUnique;
            // Envoi de l'email à l'utilisateur avec le lien unique
            const mailService = new MailService;
            mailService.sendMail(request.body.email, lienUniquePassword);
            return { status: 1 };
        }else{
            return { status: 0 };
        }
    }

    async forgotPasswordResponse(request: Request, response: Response, next: NextFunction) {
        // Vérification si la clé unique est la bonne pour l'addresse mail qui fait la modif de mot de passe
        const passwordKeyVerif = await this.passwordKeyRepository.find({where: {key: request.body.key}});

        if(passwordKeyVerif.length){
            // On trouve l'utilisateur à modifer
            const userUpdatePassword = await this.userRepository.find({where: {email: passwordKeyVerif[0].email}});
            // On hash le nouveau mot de passe
            const salt = await bcrypt.genSalt(10);
            userUpdatePassword[0].password = await bcrypt.hash(request.body.password,salt);
            // On update dans la base avec le nouveau mot de passe
            const user = await this.userRepository.save(userUpdatePassword[0]);
            // Suppression de la clé unique de modification de mot de passe
            await this.passwordKeyRepository.remove(passwordKeyVerif[0]);

            return { status: 1, data: user} ;
        }else{
            return { status: 0 };
        }
    }
}
