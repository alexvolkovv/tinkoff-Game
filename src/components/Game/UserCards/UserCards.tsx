import React, { FC, memo } from 'react'
import { CardType } from '../../../models/CardType'
import { Card } from '../Card/Card'
import styles from './UserCards.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import userCardStyles from './UserCards.module.scss'
import { GameType } from '../../../models/GameType'
import { changeGame } from '../../../store/reducers/game/actionCreators'

type UserCardsProps = {
  game: GameType
}

export const UserCards: FC<UserCardsProps> = memo(
  ({ game }) => {
    const { user } = useAppSelector((state) => state.userReducer)
    const isUserTurn = user?.id === game.currentUserTurnId
    const nameStyles = [
      userCardStyles.name,
      isUserTurn ? userCardStyles.changingOpacity : '',
    ]
    const dispatch = useAppDispatch()

    function turnCard(turnedCard: CardType) {
      const filteredCards = game.userCards.filter(
        (curCard) => curCard.id !== turnedCard.id
      )
      const newGame: GameType = {
        ...game,
        currentCard: turnedCard,
        currentUserTurnId: game.opponent.id,
        userCards: filteredCards,
      }

      dispatch(
        changeGame({
          userId: user?.id!,
          game: newGame,
        })
      )
    }

    return (
      <div className={styles.wrap}>
        <div className={nameStyles.join(' ')}>{user?.name}</div>
        <div className={styles.line}></div>
        <div className={styles.cards}>
          {game.userCards &&
            game.userCards.map((card) => {
              const canUserTurn =
                game.currentCard.color === card.color ||
                game.currentCard.value === card.value

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
