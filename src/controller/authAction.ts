import { Request, Response } from "express";
import * as JWT from "jsonwebtoken";
import * as Passport from "passport";
import { Service } from "../entity/Service";

export async function authAction(request: Request, response: Response) {
  Passport.authenticate(
    "local",
    { session: false },
    (err, user) => {
      if (err || !user) {
        return response.status(400).json({
          message: "Incorrect email or password.",
          user,
        });
      }

      request.login(
        user,
        { session: false },
        async (loginError) => {
          if (loginError) {
            return response.send(loginError);
          }

          const token = JWT.sign(user, process.env.JWT_SECRET);
          const service = await Service.findOneWithDetails();
          return response.json({ user, service, token });
        },
      );
    },
  )(request, response);
}
