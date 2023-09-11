import { DataSource } from 'typeorm'

import { Env } from '@/lib/env';
import { Task } from '@/lib/models';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: Env.dbHost,
  port: Env.dbPort,
  username: Env.dbUsername,
  password: Env.dbPassword,
  database: Env.dbDatabase,
  synchronize: true,
  logging: false,
  entities: [Task],
  migrations: [],
});

export default AppDataSource;
