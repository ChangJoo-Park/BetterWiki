import * as Passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../entity/User";

Passport.use(
  new LocalStrategy({
    passwordField: "password",
    usernameField: "email",
  },
    /**
     * this one is typically a DB call. Assume that
     * the returned user object is pre-formatted and ready for storing in JWT
     *
     */
    async (email: string, password: string, cb) => {
      try {
        const user: User = await User.findOne({
          email,
          passwordDigest: password,
        });
        if (!user) {
          return cb(null, false, { message: "Incorrect email or password." });
        }
        return cb(null, Object.assign({}, user), { message: "Logged In Successfully" });
      } catch (error) {
        cb(error);
      }
    },
  ),
);

Passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
    async (jwtPayload, cb) => {
      try {
        const user = await User.findOne(jwtPayload.id);
        if (!user) {
          throw new Error("User not found");
        }
        cb(null, Object.assign({}, user));
      } catch (error) {
        cb(error);
      }
    },
  ),
);

export const passport = Passport;
