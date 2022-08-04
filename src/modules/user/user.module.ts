import { Module } from '@nestjs/common'
import { userProvider } from './user.provider'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [userProvider, UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
