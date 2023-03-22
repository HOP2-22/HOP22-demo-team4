const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("./models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user === null) {
          user = await User.create({
            firstName: profile._json.family_name,
            lastName: profile._json.given_name,
            profileImage: profile._json.picture,
            email: profile._json.email,
            gender: "male",
            password: profile._json.sub,
            googleId: profile.id,
          });
        }
      } catch (error) {
        console.log(error);
      }
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
