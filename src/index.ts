import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import * as express from "express";
import { NextFunction } from "express-serve-static-core";
import "reflect-metadata";
import { createConnection } from "typeorm";
import "./authentication/passport";
import { AppRoutes } from "./routes";

createConnection().then(async (connection) => {
    const app = express();
    app.use(bodyParser.json());

    AppRoutes.forEach((route) => {
        app[route.method](route.path, (request: Request, response: Response, next: NextFunction) => {
            route.action(request, response)
                .then(() => next)
                .catch((err) => next(err));
        });
    });

    app.listen(3000, () => {
        console.log("Server Started on 3000");
    });
});
