import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dbconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_DB_HOST || 'localhost',
  port: Number.parseInt(process.env.POSTGRES_DB_PORT || '5432'),
  username: process.env.POSTGRES_DB_USERNAME || 'postgres',
  password: process.env.POSTGRES_DB_PASSWORD || 'SCH08',
  database: process.env.POSTGRES_DB_NAME || 'cats_db',
  entities: [],
  synchronize: false,
};

export { dbconfig };
