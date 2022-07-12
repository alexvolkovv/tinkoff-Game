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
