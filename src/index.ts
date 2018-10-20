import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import * as express from "express";
import { NextFunction } from "express-serve-static-core";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { AppRoutes } from "./routes";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async (connection) => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach((route) => {
        app[route.method](route.path, (request: Request, response: Response, next: NextFunction) => {
            route.action(request, response)
                .then(() => next)
                .catch((err) => next(err));
        });
    });

    // run app
    app.listen(3000);
});
