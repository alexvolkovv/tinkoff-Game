import { createAsyncThunk } from '@reduxjs/toolkit'
import { RoomsService } from '../../../api/RoomsService'

export const getCurrentRoom = createAsyncThunk(
  'currentRoom/getCurrentRoom',
  async (roomId: number, thunkApi) => {
    try {
      return await RoomsService.getRoomById(roomId)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось загрузить комнату')
    }
  }
)

export const createCurrentRoom = createAsyncThunk(
  'currentRoom/createCurrentRoom',
  async (name: string, thunkApi) => {
    try {
      return await RoomsService.createRoom(name)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось создать комнату')
    }
  }
)

let interval: any = null

export const startListeningRoom = createAsyncThunk(
  'currentRoom/startListeningRoom',
  async (roomId: number, thunkApi) => {
    try {
      clearInterval(interval)
      interval = setInterval(() => {
        thunkApi.dispatch(getCurrentRoom(roomId))
      }, 1000)

      return thunkApi.fulfillWithValue('Таймер создан')
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось задать таймер')
    }
  }
)

export const stopListeningRoom = createAsyncThunk(
  'currentRoom/stopListeningRoom',
  async (_, thunkApi) => {
    try {
      clearInterval(interval)

      return thunkApi.fulfillWithValue('Таймер очищен')
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось очистить таймер')
    }
  }
)
