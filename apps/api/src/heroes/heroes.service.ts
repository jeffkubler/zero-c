import { Injectable } from '@nestjs/common';
import { InjectMysql, Mysql } from 'mysql2-nestjs';
//import { MySqlOptions} from 'configs/dev.config';

//#region "Hero data model"

export interface Hero {
    name: string;
    imgUrl: string;
    powers: string [];
}
//#endregion

//#region dummys

// const DUMMY_HEROES: Hero[] = [
//     {
//         name: "Bobby B",
//         imgUrl: 'https://nerdist.com/wp-content/uploads/2019/06/robert-baratheon.jpg',
//         powers: ["Hammer", "Drink"]
//     },
//     {
//         name: "Superman",
//         imgUrl: 'https://www.elcbrands.com/media/superman1.1.jpg',
//         powers: ["Flight", "Strength", "Invincibility", "Heat Ray Vision", "Heightened Senses"]
//     }
// ].reverse();
//#endregion


@Injectable()
export class HeroesService {
    constructor(@InjectMysql() private readonly mysql: Mysql) {}
    public async getHeroes(): Promise<Hero[]> {
        const statement = "SELECT * from hero";
        const [rows, _fields] = await this.mysql.query(statement);
        return rows as Hero[];
        //return DUMMY_HEROES;
    }

    public async getHeroesForReal(id  = 1): Promise<Hero[]> {
        try {
            const statement = "SELECT * FROM hero where id = ?"// WHERE id = ? AND name = ?";
            const columns = ['name', 'id'];
            const values = [id];
            const [rows, _fields] =  await this.mysql.query(statement, values); 
            console.log(rows);

            return rows as Hero[];
        }
        catch (error) {
            console.log(error)
            return [];
        }

    }

    // public async connTest(): Promise<any> {
    //     let result: any = {message: "no good"};
    //     const conn = await createConnection(MySqlOptions);
    //     try {
    //         result = await conn.query('SELECT * FROM hero');
    //         return result;
    //     }
    //     catch (error: any) {
    //         result = error;
    //     }
    //     finally {
    //         await conn.end();
    //         return result;
    //     }
    // }
}
