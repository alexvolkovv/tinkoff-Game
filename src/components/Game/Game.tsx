import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { UserCards } from './UserCards/UserCards'
import { OpponentCards } from './OpponentCards/OpponentCards'
import { Decks } from './Decks/Decks'
import styles from './Game.module.scss'
import { getGame } from '../../store/reducers/game/actionCreators'
import { useInterval } from '../../hooks/useInterval'
import { setGame } from '../../store/reducers/game/gameSlice'
import { LoadingModal } from '../LoadingModal/LoadingModal'
import { Modal } from '../UI/Modal/Modal'
import { GameOverModal } from './GameOverModal/GameOverModal'

export const Game = memo(() => {
  const { game } = useAppSelector((state) => state.gameReducer)
  const { currentRoom } = useAppSelector((state) => state.currentRoomReducer)
  const { user } = useAppSelector((state) => state.userReducer)
  const dispatch = useAppDispatch()

  const startListening = useInterval(() => {
    dispatch(
      getGame({
        userId: user?.id!,
        roomId: currentRoom?.id!,
      })
    )
  }, 1000)

  useEffect(() => {
    const interval = startListening()

    return () => {
      dispatch(setGame(null))
      clearInterval(interval)
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
        currentUserTurn={game?.currentUserTurnId!}
      />
      <Decks game={game} />
      <UserCards game={game} />

      {game.isOver && (
        <Modal
          setModalVisible={() => {
            console.log('dsadas')
          }}
          canExit={false}
        >
          <GameOverModal />
        </Modal>
      )}
    </div>
  )
})
