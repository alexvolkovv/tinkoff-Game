import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { UserCards } from './UserCards/UserCards'
import { OpponentCards } from './OpponentCards/OpponentCards'
import { Decks } from './Decks/Decks'
import styles from './Game.module.scss'
import {
  getGame,
  startListeningGame,
  stopListeningGame,
} from '../../store/reducers/game/actionCreators'
import { setGame } from '../../store/reducers/game/gameSlice'
import { LoadingModal } from '../LoadingModal/LoadingModal'
import { Modal } from '../UI/Modal/Modal'
import { GameOverModal } from './GameOverModal/GameOverModal'

export const Game = memo(() => {
  const { game } = useAppSelector((state) => state.gameReducer)
  const { currentRoom } = useAppSelector((state) => state.currentRoomReducer)
  const { user } = useAppSelector((state) => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const game = {
      userId: user?.id!,
      roomId: currentRoom?.id!,
    }

    dispatch(getGame(game))
    dispatch(startListeningGame(game))

    return () => {
      dispatch(setGame(null))
      dispatch(stopListeningGame())
    }
  }, [])

  if (!game) {
    return (
      <div className={styles.game}>
        <LoadingModal type={'white'} />
      </div>
    )
  }

  return (
    <div className={styles.game + ' ' + styles[game?.currentCard?.color!]}>
      <OpponentCards
        opponent={game?.opponent!}
        currentUserTurn={game?.currentPlayerTurnId!}
      />
      <Decks game={game} />
      <UserCards game={game} room={currentRoom!} />

      {game.over && (
        <Modal setModalVisible={() => {}} canExit={false}>
          <GameOverModal />
        </Modal>
      )}
    </div>
  )
})
