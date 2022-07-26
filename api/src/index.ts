import "reflect-metadata";
import {createConnection, ReturningStatementNotSupportedError} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import * as expressFileupload from "express-fileupload";

// Logging system
import * as morgan from 'morgan';
import * as rfs from 'rotating-file-stream';
import * as path from 'path';
import * as cors from 'cors';
import { AuthentificationService } from "./Service/AuthentificationService";

createConnection().then(async connection => {
    // create express app
    const app = express();

    // enable file upload
    app.use(expressFileupload({
        createParentPath: true
    }));

    // add static file routes
    app.use(express.static('uploads'));

    // add middleware
    app.use(bodyParser.json());
    app.use(cors());

    // Logging system
    const accessLogStream = rfs.createStream('access.log', {
        interval: '1d', // rotate daily
        path: path.join('./log')
    });
    morgan.token('body', req => {
        return JSON.stringify(req.body)
    });
    morgan.token('datetime', req => {
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        let datetime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

        return datetime
    });
    app.use(morgan(':datetime  :method :url :status :response-time ms - :res[content-length] Body :body ', { stream: accessLogStream }));

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method]('/api'+route.route, async (req: Request, res: Response, next: Function) => {
            if(req.headers.authorization) {
                const authentificationService = new AuthentificationService();
                const verif = await authentificationService.getUserInfo(req);
                let filtre = {};
                if(!route.allowedRoles.includes(verif.userId.role)) {
                    res.status(500).send("Vous n'avez pas les droits d'accès");
                    return;
                }
            }
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    //Accès au variable du fichier .env
    const dotenv = require('dotenv');
    dotenv.config();

    // start express server
    app.listen(process.env.PORT);
    console.log(`Serveur démarré sur le port ${process.env.PORT}. Adresse http://localhost:${process.env.PORT}`);

}).catch(error => console.log(error));
