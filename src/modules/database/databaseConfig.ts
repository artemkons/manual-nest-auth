interface DatabaseConfigAttributes {
  username: string
  password: string
  host: string
  port: number
  // TODO use dialect from sequelize
  dialect: 'postgres'
  logging: boolean | (() => void)
  force: boolean
  timezone: string
}

export interface DatabaseConfig {
  development: DatabaseConfigAttributes
}

export const databaseConfig: DatabaseConfig = {
  development: {
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || null,
    host: process.env.DB_HOST,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
    force: true,
    timezone: '+02:00',
  },
}
