import { createAsyncThunk } from '@reduxjs/toolkit'
import { GameService } from '../../../api/GameService'
import { GameType } from '../../../models/GameType'

export type GetGameRequest = {
  roomId: number
  userId: number
}

export type ChangeGameRequest = {
  userId: number
  game: GameType
}

export const getGame = createAsyncThunk(
  'game/getGame',
  async (data: GetGameRequest, thunkApi) => {
    try {
      return await GameService.getGame(data)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось загрузить игру')
    }
  }
)

export const changeGame = createAsyncThunk(
  'game/changeGame',
  async (data: ChangeGameRequest, thunkApi) => {
    try {
      return await GameService.changeGame(data)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось обновить игру')
    }
  }
)
