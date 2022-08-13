import { Strategy, ExtractJwt } from 'passport-jwt'

export class JwtStrategy extends Strategy {
  constructor() {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: 'secret',
      },
      async (req, payload, next) => {},
    )
  }

  public async verify(req, payload, next) {}
}
