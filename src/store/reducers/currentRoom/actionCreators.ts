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
