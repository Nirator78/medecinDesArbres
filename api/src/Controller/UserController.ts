import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User, UserRole} from "../Entity/User";

import {PasswordKey} from '../Entity/PasswordKey';
import {MailService} from '../Service/MailService';
import {AuthentificationService} from "../Service/AuthentificationService";
import { validate } from "class-validator";

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export class UserController {

    private userRepository = getRepository(User);
    private passwordKeyRepository = getRepository(PasswordKey);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        const verif = await this.authentificationService.getUserInfo(request);
        let filtre = {};
        // Si admin on ne renvoie que les utilisateurs
        if(verif.userId.role === "admin"){
            Object.assign(filtre, {role: "user"});
        }
        const users = await this.userRepository.find(filtre);
        return { status: 1, data: users } ;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const salt = bcrypt.genSaltSync(10);
        // On décrypte le mot de passe de l'envoie
        request.body.password = this.authentificationService.decryptPassword(request.body.password);
        // On crypte le mot de passe pour le bdd
        request.body.password = bcrypt.hashSync(request.body.password, salt);

        let user = new User();
        Object.assign(user, {...user, ...request.body});
        const errors = await validate(user);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const userSaved = await this.userRepository.save(request.body);
            let token = jwt.sign({ data: userSaved },process.env.SECRET_TOKEN, { expiresIn: '30d' });
            return { status: 1, data: userSaved, token: token };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const modifiedUser = await this.userRepository.findOne(request.params.id);
        // Si le mot de passe à été modifié alors on le décrypt du body pour le re crypté pour la bdd
        if(modifiedUser.password != request.body.password) {
            const decryptedPassword = this.authentificationService.decryptPassword(request.body.password);
            const salt = bcrypt.genSaltSync(10);
            request.body.password = bcrypt.hashSync(decryptedPassword, salt);
        }
        let user = new User();
        Object.assign(user, {...user, ...request.body});
        const errors = await validate(user);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const userSaved = await this.userRepository.save(request.body);
            return { status: 1, data: userSaved };
        }
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
            const passwordDecrypted = this.authentificationService.decryptPassword(request.body.password);
            const testPassword = await bcrypt.compare(passwordDecrypted, userLogin.password);
            if(testPassword){
                let data = {user: userLogin};
                let token = jwt.sign({ data }, process.env.SECRET_TOKEN);
                return { status: 1, data: userLogin, token: token }
            }else{
                return { status: 0 };
            }
        }else{
            return { status: 0 };
        }
    }

    async loginAdmin(request: Request, response: Response, next: NextFunction) {
        const login = await this.login(request, response, next);
        if(login.status === 1) {
            if(login.data.role === UserRole.USER) {
                return { status: 2 };
            }else{
                return login
            }
        }else{
            return login
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
            const passwordDecrypted = await this.authentificationService.decryptPassword(request.body.password);
            const salt = await bcrypt.genSalt(10);
            userUpdatePassword[0].password = await bcrypt.hash(passwordDecrypted, salt);
            // On update dans la base avec le nouveau mot de passe
            const user = await this.userRepository.save(userUpdatePassword[0]);
            // Suppression de la clé unique de modification de mot de passe
            //await this.passwordKeyRepository.remove(passwordKeyVerif[0]);

            return { status: 1, data: user} ;
        }else{
            return { status: 0 };
        }
    }

    async getAllPasswordKey(request: Request, response: Response, next: NextFunction) {
        const passwordKeys = await this.passwordKeyRepository.find();
        return { status: 1, data: passwordKeys } ;
    }

    async removePasswordKeysToRemove(request: Request, response: Response, next: NextFunction) {
        try{
            let passwordKeyToRemove = await this.passwordKeyRepository.findOne(request.params.id);
            await this.passwordKeyRepository.remove(passwordKeyToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }
}
