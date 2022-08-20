import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './interfaces/User'
import { CheckLoggedInUserGuard } from '../../shared/guards/check-logged-user.guard'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  public async findAll() {
    const users = await this.userService.findAll()
    return users
  }

  @Post('users')
  public async create(@Body() body: User) {
    const user = await this.userService.create(body)
    return user
  }

  @Get('user/:userId')
  public async findOne(@Param() params) {
    return await this.userService.findByPk(params.userId)
  }

  @Put('user/:userId')
  public async update(@Param() params, @Body() body: User) {
    return await this.userService.update(params.userId, body)
  }

  @Delete('user/:userId')
  @UseGuards(CheckLoggedInUserGuard)
  public async delete(@Param() params) {
    return await this.userService.destroy(params.userId)
  }
}
