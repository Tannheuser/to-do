export const Env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  dbHost: process.env.MYSQL_HOST,
  dbPort: parseInt(process.env.MYSQL_PORT || '3306', 10),
  dbUsername: process.env.MYSQL_USER,
  dbPassword: process.env.MYSQL_PASSWORD,
  dbDatabase: process.env.MYSQL_DB,
  username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME,
  password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD,
};