/**
 * Created by Clement on 20/07/2021
 * Created At 09:56
 */
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Conference} from "../Entity/Conference";
import {ConferenceParticipant} from "../Entity/ConferenceParticipant";
import {User} from "../Entity/User";
import {AuthentificationService} from '../Service/AuthentificationService';
import { validate } from "class-validator";

export class ConferenceController {

    private conferenceRepository = getRepository(Conference);
    private conferenceParticipantRepository = getRepository(ConferenceParticipant);
    private userRepository = getRepository(User);
    private authentificationService = new AuthentificationService();

    async all(request: Request, response: Response, next: NextFunction) {
        let conferenceListe = await this.conferenceRepository.find({ relations: ["conferenceParticipants", "conferenceParticipants.user"] });
        if(conferenceListe){
            return { status: 1, data: conferenceListe }
        }else{
            return { status: 0 };
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let conference = await this.conferenceRepository.findOne(request.params.id, { relations: [ "conferenceParticipants" , "conferenceParticipants.user"] });
        if(conference){
            return { status: 1, data: [conference] }
        }else{
            return { status: 0 };
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {        
        let conference = new Conference();
        Object.assign(conference, {...conference, ...request.body});
        const errors = await validate(conference);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const conferenceSaved = await this.conferenceRepository.save(request.body);
            return { status: 1, data: conferenceSaved };
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let conference = new Conference();
        Object.assign(conference, {...conference, ...request.body});
        const errors = await validate(conference);
        if(errors.length > 0){
            return { status: 0, error: errors };
        }else{
            const conferenceSaved = await this.conferenceRepository.save(request.body);
            return { status: 1, data: conferenceSaved };
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try{
            let conferenceToRemove = await this.conferenceRepository.findOne(request.params.id);
            await this.conferenceRepository.remove(conferenceToRemove);
            return { status: 1 }
        }catch (e){
            return { status: 0, error: e }
        }
    }

    async addUserToConference(request: Request, response: Response, next: NextFunction) {
        try{
            const {conferenceId, userId} = request.params;
            // Recherche de la conférence sur laquelle travailler
            let conference = await this.conferenceRepository.findOne(request.params.id, { relations: [ "conferenceParticipants" , "conferenceParticipants.user"] });

            // Recherche de l'utilisateur à ajouter à la conférence
            let userToAdd = await this.userRepository.findOne(userId);

            // Création d'un conférence participant
            let newConferenceParticipant = new ConferenceParticipant();
            newConferenceParticipant.conference = conferenceId;
            newConferenceParticipant.user = userToAdd;
            const newConferenceParticipantSaved = await this.conferenceParticipantRepository.save(newConferenceParticipant);

            // Ajout du participant à la conférence
            conference.conferenceParticipants.push(newConferenceParticipantSaved)
            const conferenceUpdated = await this.conferenceRepository.save(conference);
            return { status: 1, data: conferenceUpdated }
        }catch (e){
            return { status: 0, error: e }
        }
    }
}
