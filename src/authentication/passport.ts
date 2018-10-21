import * as Passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../entity/User";

console.log("PASSPORT IMPORTED");

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
        const user = await User.findOne({
          email,
          passwordDigest: password,
        });

        if (!user) {
          return cb(null, false, { message: "Incorrect email or password." });
        }

        return cb(null, user, { message: "Logged In Successfully" });
      } catch (error) {
        cb(error);
      }
    },
  ),
);
