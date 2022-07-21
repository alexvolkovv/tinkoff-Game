import { createAsyncThunk } from '@reduxjs/toolkit'
import { GameService } from '../../../api/GameService'

export type GetGameRequest = {
  roomId: number
  userId: number
}

export type ChangeGameRequest = {
  userId: number
  roomId: number
  cardId: number
}

export type TakeRandomCardRequest = {
  userId: number
  roomId: number
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
      console.log(data)
      return await GameService.changeGame(data)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось обновить игру')
    }
  }
)

export const takeRandomCard = createAsyncThunk(
  'game/takeRandomCard',
  async (data: TakeRandomCardRequest, thunkApi) => {
    try {
      console.log(data)
      return await GameService.takeRandomCard(data)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось взять карту')
    }
  }
)
