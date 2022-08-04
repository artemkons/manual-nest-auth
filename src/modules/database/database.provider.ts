import { Sequelize } from 'sequelize-typescript'
import { databaseConfig } from './databaseConfig'
import { User } from '../user/user.entity'

export const databaseProvider = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
    const config = databaseConfig.development

    const sequelize = new Sequelize(config)
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }

    sequelize.addModels([User])
    await sequelize.sync()

    return sequelize
  },
}
