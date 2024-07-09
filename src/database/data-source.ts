import 'dotenv/config';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: +process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ['src/database/entities/index.ts'],
  // entities: ['src/**/*.entity.ts'],// tìm mọi thư mục con của src/ dù có sâu đến mấy vd src/xx/xxx/xxx/xxx/*.entity.ts
  migrations: ['src/database/migrations/*.ts'],
});
