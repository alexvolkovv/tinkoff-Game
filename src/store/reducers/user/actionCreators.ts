import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserService } from '../../../api/UserService'
import { UserType } from '../../../models/UserType'

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userName: string, thunkApi) => {
    try {
      return await UserService.createUser(userName)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось создать пользователя')
    }
  }
)

export const changeUser = createAsyncThunk(
  'user/changeUser',
  async (user: UserType, thunkApi) => {
    try {
      return await UserService.changeUser(user)
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось обновить пользователя')
    }
  }
)
