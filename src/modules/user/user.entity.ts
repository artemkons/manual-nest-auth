import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'

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
}
