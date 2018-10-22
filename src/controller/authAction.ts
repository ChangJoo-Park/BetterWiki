import { Request, Response } from "express";
import * as JWT from "jsonwebtoken";
import * as Passport from "passport";

export async function authAction(request: Request, response: Response) {
  Passport.authenticate(
    "local",
    { session: false },
    (err, user) => {
      if (err || !user) {
        return response.status(400).json({
          message: "Something is not right",
          user,
        });
      }

      request.login(
        user,
        { session: false },
        (loginError) => {
          if (loginError) {
            return response.send(loginError);
          }

          const token = JWT.sign(user, process.env.JWT_SECRET);
          return response.json({ user, token });
        },
      );
    },
  )(request, response);
}
