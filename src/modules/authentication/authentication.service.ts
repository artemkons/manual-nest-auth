import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  createToken(email: string, ttl?: number) {
    const expiresIn = ttl || 60 * 60
    const secretOrKey = 'secret'
    const user = { email }
    const token = jwt.sign(user, secretOrKey, { expiresIn })

    return {
      expiresIn,
      accessToken: token,
    }
  }

  async validateUser(payload: { email: string }) {
    const user = await this.userService.findOne({
      where: { email: payload.email },
    })

    return !!user
  }
}
