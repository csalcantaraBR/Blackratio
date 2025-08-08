import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { User } from './modules/users/user.entity';
import { Torrent } from './modules/torrents/torrent.entity';
import { Snatch } from './modules/torrents/snatch.entity';

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT || 5432),
  username: process.env.PGUSER || 'tracker',
  password: process.env.PGPASSWORD || 'tracker',
  database: process.env.PGDATABASE || 'tracker',
  synchronize: true, // (só no 1º run; depois volte para false)
  entities: [User, Torrent, Snatch],
  migrations: ['dist/migrations/*.js'],
};

