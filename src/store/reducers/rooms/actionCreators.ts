import { createAsyncThunk } from '@reduxjs/toolkit'
import { RoomsService } from '../../../api/RoomsService'

export const getRooms = createAsyncThunk(
  'rooms/getRooms',
  async (_, thunkApi) => {
    try {
      return await RoomsService.getRooms()
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось загрузить комнаты')
    }
  }
)
