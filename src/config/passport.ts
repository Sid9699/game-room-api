import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";

passport.use(
  new Strategy(
    {
      secretOrKey: process.env.JWT_SECRET as string,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (jwt_payload, cb) => {
      delete jwt_payload.iat;
      delete jwt_payload.exp;
      cb(null, jwt_payload);
    }
  )
);
