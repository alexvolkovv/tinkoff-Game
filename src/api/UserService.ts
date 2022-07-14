import { UserType } from '../models/UserType'
import { host } from './index'

export class UserService {
  static async createUser(name: string): Promise<UserType> {
    return await host.post<UserType>('user', { name })
  }

  static async changeUser(user: UserType): Promise<UserType> {
    return await host.put<UserType>('user', user)
  }
}
