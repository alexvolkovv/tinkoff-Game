import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user/UserSlice'
import roomsReducer from './reducers/rooms/RoomsSlice'

const rootReducer = combineReducers({
  userReducer,
  roomsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
