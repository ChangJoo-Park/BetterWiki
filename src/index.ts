import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import * as express from "express";
import { NextFunction } from "express-serve-static-core";
import * as logger from "morgan";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { onlyAdmin } from "./authentication/onlyAdmin";
import "./authentication/passport";
import { passport } from "./authentication/passport";
import { AppRoutes } from "./routes";

createConnection().then(async (connection) => {
    const app = express();
    app.use(bodyParser.json());
    app.use(logger("dev"));

    AppRoutes.forEach((route) => {
        if (route.needAuth) {
            if (route.onlyAdmin) {
                app[route.method](
                    route.path,
                    passport.authenticate("jwt", { session: false }),
                    onlyAdmin,
                    (request: Request, response: Response, next: NextFunction) => {
                        return route.action(request, response).catch((error) => next(error));
                    },
                );
            } else {
                app[route.method](
                    route.path,
                    passport.authenticate("jwt", { session: false }),
                    (request: Request, response: Response, next: NextFunction) => {
                        return route.action(request, response).catch((error) => next(error));
                    },
                );
            }
        } else {
            app[route.method](
                route.path,
                (request: Request, response: Response, next: NextFunction) => {
                    return route.action(request, response).catch((error) => next(error));
                },
            );
        }
    });

    app.use(function(err, req, res, next) {
        console.error(err.message);
        if (!err.statusCode) { err.statusCode = 500; }
        res.status(err.statusCode).send(err.message);
    });

    app.listen(3000, () => {
        console.log("Server Started on 3000");
    });
});
