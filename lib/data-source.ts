import { DataSource } from 'typeorm'

import { Env } from '@/lib/env';
import { Task } from '@/lib/models';
import { CreateTables1694256048074 } from '@/lib/migrations';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: Env.dbHost,
  port: Env.dbPort,
  username: Env.dbUsername,
  password: Env.dbPassword,
  database: Env.dbDatabase,
  synchronize: false,
  logging: false,
  entities: [Task],
  migrations: [CreateTables1694256048074],
});

export default AppDataSource;
