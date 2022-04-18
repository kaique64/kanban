import "reflect-metadata"
import { DataSource } from "typeorm"

const {
    MYSQL_HOST, MYSQL_PORT, MYSQL_USERNAME,
    MYSQL_PASSWORD, MYSQL_DATABASE
} = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: MYSQL_HOST,
    port: Number(MYSQL_PORT),
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    synchronize: true,
    logging: false,
    entities: ["./entities/*.ts"],
    migrations: [],
    subscribers: [],
});
