import { host } from './index'
import {
  ChangeGameRequest,
  GetGameRequest,
  TakeRandomCardRequest,
} from '../store/reducers/game/actionCreators'
import { GameType } from '../models/GameType'

export class GameService {
  static async getGame(data: GetGameRequest): Promise<GameType> {
    return await host.get<GameType>(
      `game?roomId=${data.roomId}&userId=${data.userId}`
    )
  }

  static async changeGame(data: ChangeGameRequest): Promise<GameType> {
    return await host.put<GameType>(`game/card`, data)
  }

  static async takeRandomCard(data: TakeRandomCardRequest): Promise<GameType> {
    return await host.get<GameType>(
      `game/card?userId=${data.userId}&roomId=${data.roomId}`
    )
  }
}
