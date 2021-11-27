/**
 * Created by Clement on 20/07/2021
 * Created At 09:56
 */
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Conference} from "../Entity/Conference";
import {AuthentificationService} from '../Service/AuthentificationService';

export class ConferenceController {

    private conferenceRepository = getRepository(Conference);
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
        const conference = await this.conferenceRepository.save(request.body);
        return {status: 1, data: conference };
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const conference = await this.conferenceRepository.save(request.body);
        return { status: 1, data: conference } ;
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
}
