import { LoginReq } from '@zeroc/api';
import { IsString } from 'class-validator';

export class LoginUserDto implements LoginReq {
  @IsString()
  public username = "";
  @IsString()
  public password = "";
}