import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import * as dotenv from "dotenv"
import { Invoice } from "./entities/Invoice";
dotenv.config();


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST || 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    ssl: false,
    entities: [
        User,
        Invoice
    ],
    migrations: [],
  });