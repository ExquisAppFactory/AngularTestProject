import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./typeorm/entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST || 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    ssl: true,
    entities: [
        User
    ],
    migrations: [],
  });