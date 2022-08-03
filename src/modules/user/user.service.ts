import { Injectable, Inject } from '@nestjs/common'
import { User } from './user.entity'
import { User as IUser } from './interfaces/User'

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly UserRepository: typeof User,
  ) {}

  public async findAll() {
    return await this.UserRepository.findAll()
  }

  // FIXME Correctly type options
  public async findOne(options: any) {
    return await this.UserRepository.findOne(options)
  }

  public async findByPk(pk: number) {
    return await this.UserRepository.findByPk(pk)
  }

  public async create(user: IUser) {
    return await this.UserRepository.create(user)
  }

  public async update(pk: number, newValue: IUser) {
    const user = await this.UserRepository.findByPk(pk)
    if (!user) throw new Error('User not fond!')

    return await user.update(newValue)
  }

  public async destroy(pk: number) {
    const user = await this.UserRepository.findByPk(pk)
    if (!user) throw new Error('User not found!')

    return await user.destroy()
  }
}
