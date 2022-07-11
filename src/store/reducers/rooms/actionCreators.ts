import { createAsyncThunk } from '@reduxjs/toolkit'
import { RoomsService } from '../../../api/RoomsService'

export const getRooms = createAsyncThunk(
  'rooms/getRooms',
  async (searchQuery: string, thunkApi) => {
    try {
      return await RoomsService.getRooms(searchQuery)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось загрузить комнаты')
    }
  }
)
