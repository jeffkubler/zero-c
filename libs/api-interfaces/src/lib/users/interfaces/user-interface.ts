import { UserEntity } from '../entities/user.entity';

export type UserModel = Omit<UserEntity, 'password'>;
export type LoginReq = Pick<UserEntity, 'username' | 'password'>
export type LoginResp = UserModel & { token: string}
export const DEFAULT_USER: UserModel = { id: -1, isActive: false, username: 'default' };
 