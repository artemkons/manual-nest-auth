import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'

@Injectable()
export class CheckLoggedInUserGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest()
    return Number(req.params.userId) === req.user?.id
  }
}
