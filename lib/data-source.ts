import { DataSource } from 'typeorm'

import { Task } from '@/lib/models';
import { CreateTables1694256048074 } from '@/lib/migrations';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306', 10),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: false,
  logging: false,
  entities: [Task],
  migrations: [CreateTables1694256048074],
});

export default AppDataSource;
