import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import * as express from "express";
import { NextFunction } from "express-serve-static-core";
import "reflect-metadata";
import { createConnection } from "typeorm";
import "./authentication/passport";
import { passport } from "./authentication/passport";
import { AppRoutes } from "./routes";

createConnection().then(async (connection) => {
    const app = express();
    app.use(bodyParser.json());

    AppRoutes.forEach((route) => {
        if (route.needAuth) {
            app[route.method](
                route.path,
                passport.authenticate("jwt", { session: false }),
                (request: Request, response: Response, next: NextFunction) => {
                    return route.action(request, response).catch((error) => next(error));
                },
            );
        } else {
            app[route.method](route.path, (request: Request, response: Response, next: NextFunction) => {
                return route.action(request, response).catch((error) => next(error));
            });
        }
    });

    app.listen(3000, () => {
        console.log("Server Started on 3000");
    });
});
