import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default (): PostgresConnectionOptions => ({
  url: process.env.url,
  type: 'postgres',
  port: +process.env.port,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});
