import { NestMysql2Options } from 'mysql2-nestjs';

export const MySqlOptions: NestMysql2Options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'zerocom',
    waitForConnections: false,
    connectionLimit: 2,
    queueLimit: 1
}