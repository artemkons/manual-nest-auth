import { User } from './User'

export interface UserService {
  findAll(): Promise<User[]>
  findById(id: number): Promise<User | null>
  findOne(options: object): Promise<User | null>
  create(user: User): Promise<User>
  update(id: number, newValue: User): Promise<User | null>
  delete(id: number): Promise<void>
}
