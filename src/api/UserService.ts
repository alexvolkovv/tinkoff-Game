import { UserType } from '../models/UserType'
import { host } from './index'

export class UserService {
  static async createUser(name: string): Promise<UserType> {
    const { data } = await host.post<UserType>('user', { name })

    return data
  }
}
