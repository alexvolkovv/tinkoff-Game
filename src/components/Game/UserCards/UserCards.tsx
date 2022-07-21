import React, { FC, memo, useCallback } from 'react'
import { CardType } from '../../../models/CardType'
import { Card } from '../Card/Card'
import styles from './UserCards.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import userCardStyles from './UserCards.module.scss'
import { GameType } from '../../../models/GameType'
import { changeGame } from '../../../store/reducers/game/actionCreators'
import { RoomType } from '../../../models/RoomType'

type UserCardsProps = {
  game: GameType
  room: RoomType
}

export const UserCards: FC<UserCardsProps> = memo(
  ({ game, room }) => {
    const { user } = useAppSelector((state) => state.userReducer)
    const isUserTurn = user?.id === game.currentPlayerTurnId
    const nameStyles = [
      userCardStyles.name,
      isUserTurn ? userCardStyles.changingOpacity : '',
    ]
    const dispatch = useAppDispatch()

    const turnCard = useCallback((turnedCard: CardType) => {
      console.log('click')
      dispatch(
        changeGame({
          userId: user?.id!,
          roomId: room.id,
          cardId: turnedCard?.id!,
        })
      )
    }, [])

    return (
      <div className={styles.wrap}>
        <div className={nameStyles.join(' ')}>{user?.name}</div>
        <div className={styles.line}></div>
        <div className={styles.cards}>
          {game.userCards &&
            game.userCards.map((card) => {
              const canUserTurn =
                game.currentCard.color == card.color ||
                game.currentCard.cardValue == card.cardValue ||
                card.cardValue == '+4' ||
                card.cardValue == 'color'

              return (
                <Card
                  isClickable={isUserTurn && canUserTurn}
                  key={card.id}
                  card={card}
                  click={() => {
                    if (isUserTurn && canUserTurn) {
                      turnCard(card)
                    }
                  }}
                />
              )
            })}
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps.game) === JSON.stringify(nextProps.game)
  }
)
