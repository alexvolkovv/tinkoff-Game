import { RoomType } from '../../../models/RoomType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getRooms } from './actionCreators'

type RoomsState = {
  rooms: RoomType[]
  isLoading: boolean
  error: string
}

const initialState: RoomsState = {
  rooms: [],
  isLoading: false,
  error: '',
}

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms(state, action: PayloadAction<RoomType[]>) {
      state.rooms = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRooms.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(
      getRooms.fulfilled,
      (state, action: PayloadAction<RoomType[]>) => {
        state.rooms = action.payload
        state.isLoading = false
        state.error = ''
      }
    )

    builder.addCase(getRooms.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
      alert(action.payload)
    })
  },
})

export const { setRooms } = roomsSlice.actions

export default roomsSlice.reducer
