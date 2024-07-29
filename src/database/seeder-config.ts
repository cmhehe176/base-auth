import 'dotenv/config';

export default {
  type: 'mysql',
  host: '127.0.0.1',
  port: +process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ['src/database/entities/index.ts'],
  migrations: ['src/database/migrations/*.ts'],
  seeds: ['src/database/seeds/*.seed.ts'],
  factories: ['src/database/factories/*.factory.ts'],
};
