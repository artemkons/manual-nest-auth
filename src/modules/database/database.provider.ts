import { Sequelize } from 'sequelize';
import { databaseConfig } from './databaseConfig';

export const databaseProvider = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
    const config = databaseConfig.development;
    const sequelize = new Sequelize(config);

    //sequelize.addModels([User])
    return sequelize;
  },
};
