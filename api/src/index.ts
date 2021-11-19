import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./Routes";

// Logging system
//const morgan = require('morgan');
import * as morgan from 'morgan';
//const  rfs = require('rotating-file-stream')
import * as rfs from 'rotating-file-stream';
//const path = require('path')
import * as path from 'path';

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

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
        (app as any)[route.method]('/api'+route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);
    console.log("Express server has started on port 3000. Open http://localhost:3000 to see results");

}).catch(error => console.log(error));
