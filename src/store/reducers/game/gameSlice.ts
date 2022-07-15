import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameType } from '../../../models/GameType'
import { changeGame, getGame } from './actionCreators'

type GameState = {
  game: GameType | null
  isLoading: boolean
  error: string
}

const initialState: GameState = {
  game: null,
  isLoading: false,
  error: '',
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame(state, action: PayloadAction<GameType | null>) {
      state.game = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGame.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(
      getGame.fulfilled,
      (state, action: PayloadAction<GameType>) => {
        state.game = action.payload
        state.isLoading = false
        state.error = ''
      }
    )

    builder.addCase(getGame.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
      alert(action.payload)
    })

    builder.addCase(changeGame.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(
      changeGame.fulfilled,
      (state, action: PayloadAction<GameType>) => {
        state.game = action.payload
        state.isLoading = false
        state.error = ''
      }
    )

    builder.addCase(
      changeGame.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
        alert(action.payload)
      }
    )
  },
})

export const { setGame } = gameSlice.actions

export default gameSlice.reducer
