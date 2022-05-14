import { ExtractJwt } from "passport-jwt";
import mongoose from "mongoose";
import jwtstrategy from "passport-jwt";

import keys from "../config/keys.js";
const User = mongoose.model("users");
const JwtStrategy = jwtstrategy.Strategy;
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = keys.secretOrKey;
export default (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
