import { host } from './index'
import { GetGameRequest } from '../store/reducers/game/actionCreators'
import { GameType } from '../models/GameType'

export class GameService {
  static async getGame(data: GetGameRequest): Promise<GameType> {
    return await host.get<GameType>(
      `game?roomId=${data.roomId}&userId=${data.userId}`
    )
  }
}
