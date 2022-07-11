import { host } from './index'
import { RoomType } from '../models/RoomType'

export class RoomsService {
  static async getRooms(searchQuery: string): Promise<RoomType[]> {
    return await host.get<RoomType[]>(`room?search=${searchQuery}`)
  }
}
