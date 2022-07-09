import { UserType } from '../../../models/UserType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createUser } from './actionCreators'

type UserState = {
  user: UserType | null
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<UserType>) => {
        state.user = action.payload
        state.isLoading = false
        state.error = ''
      }
    )

    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(
      createUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
        alert(action.payload)
      }
    )
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
