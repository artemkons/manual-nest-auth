import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { AuthenticationMiddleware } from './shared/middlewares/authentication.middleware'
import { AuthenticationModule } from './modules/authentication/authentication.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [UserModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { path: '/users', method: RequestMethod.GET },
        { path: '/users/:id', method: RequestMethod.GET },
        { path: '/users/:id', method: RequestMethod.PUT },
        { path: '/users/:id', method: RequestMethod.DELETE },
      )
  }
}
