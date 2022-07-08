import { UserType } from '../../models/UserType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  user: UserType | null
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
