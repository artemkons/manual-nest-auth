import {
  AutoIncrement,
  BeforeCreate,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'

import { createHmac } from 'crypto'

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public firstName: string

  @Column(DataType.STRING)
  public lastName: string

  // TODO make validation
  @Column(DataType.STRING)
  public email: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public password: string

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

  @DeletedAt
  public deletedAt: Date

  @BeforeCreate
  public static async hashPassword(user: User) {
    user.password = createHmac('sha256', user.password).digest('hex')
  }
}
