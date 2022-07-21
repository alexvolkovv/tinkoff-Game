import React, { FC, memo } from 'react'
import { Card } from '../Card/Card'
import styles from './Decks.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { takeRandomCard } from '../../../store/reducers/game/actionCreators'
import { GameType } from '../../../models/GameType'

type DecksProps = {
  game: GameType
}

export const Decks: FC<DecksProps> = memo(
  ({ game }) => {
    const { user } = useAppSelector((state) => state.userReducer)
    const { currentRoom } = useAppSelector((state) => state.currentRoomReducer)
    const isUserTurn = user?.id === game.currentPlayerTurnId
    const dispatch = useAppDispatch()

    const bankDeckClick = () => {
      if (!isUserTurn) {
        return
      }

      dispatch(takeRandomCard({ userId: user?.id!, roomId: currentRoom?.id! }))
    }

    return (
      <div className={styles.decks}>
        <div className={styles.bankDeck}>
          <Card
            isUnknown={true}
            click={() => {
              bankDeckClick()
            }}
            isClickable={isUserTurn}
          />
        </div>

        <Card card={game.currentCard} isClickable={false} />
      </div>
    )
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps.game) === JSON.stringify(nextProps.game)
  }
)
