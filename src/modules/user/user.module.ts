import { Module } from '@nestjs/common'
import { userProvider } from './user.provider'
import { UserService } from './user.service'

@Module({
  providers: [userProvider, UserService],
  exports: [UserService],
})
export class UserModule {}
