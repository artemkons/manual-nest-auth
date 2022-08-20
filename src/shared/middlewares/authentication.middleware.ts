import { NestMiddleware, Injectable, HttpStatus } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { authenticate } from 'passport'
import { UserService } from 'src/modules/user/user.service'

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    return authenticate('jwt', async (...args: any) => {
      const [, payload, err] = args
      if (err)
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send('Unable to authenticate user')

      const user = await this.userService.findOne({
        where: { email: payload.email },
      })
      req.user = user

      next()
    })
  }
}
