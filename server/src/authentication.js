const {
  AuthenticationService,
  JWTStrategy,
} = require('@feathersjs/authentication');

const {
  expressOauth,
  OAuthStrategy,
} = require('@feathersjs/authentication-oauth');

class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    const baseData = await super.getEntityData(profile);
    console.log(baseData, 'profile: ', profile);

    return {
      ...baseData,
      email: profile.email,
      name: profile.name,
      first_name: profile.given_name,
      last_name: profile.family_name,
      picture: profile.picture,
    };
  }
}

module.exports = (app) => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('google', new GoogleStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};