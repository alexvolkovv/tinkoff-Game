import { createAsyncThunk } from '@reduxjs/toolkit'
import { GameService } from '../../../api/GameService'

export type GetGameRequest = {
  roomId: number
  userId: number
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
