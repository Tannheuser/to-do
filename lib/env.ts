export const Env = {
  dbHost: process.env.MYSQL_HOST,
  dbPort: parseInt(process.env.MYSQL_PORT || '3306', 10),
  dbUsername: process.env.MYSQL_USER,
  dbPassword: process.env.MYSQL_PASSWORD,
  dbDatabase: process.env.MYSQL_DB,
  username: process.env.BASIC_AUTH_USERNAME,
  password: process.env.BASIC_AUTH_PASSWORD,
};