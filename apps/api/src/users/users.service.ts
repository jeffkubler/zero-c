import { Injectable } from '@nestjs/common';
import { UserEntity } from '@zeroc/api';
import { InjectMysql, Mysql } from 'mysql2-nestjs';

@Injectable()
export class UsersService {
  
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }
  

  // findAll() {
  //   return `This action returns all users`;
  // }
  constructor(
    @InjectMysql() private readonly mysql: Mysql
  ) { }

  async findOne(username: string): Promise<UserEntity | undefined> {
    try {
      const columns: (keyof UserEntity)[] = ['id', 'username', 'password', 'isActive'];
      const values = [username];
      const statement = `SELECT ${columns.join()} from user WHERE username = ?`;
      const [rows] = await this.mysql.query(statement, values);

      return rows[0];
    } catch {
      //TODO: Log; throw a 50x error?
      return undefined;
    }
  }

  
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
