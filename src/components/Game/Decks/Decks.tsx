import React, { FC, memo } from 'react'
import { Card } from '../Card/Card'
import { CardType } from '../../../models/CardType'
import styles from './Decks.module.scss'
import { useAppSelector } from '../../../hooks/redux'

type DecksProps = {
  currentCard: CardType
  currentUserTurn: number
}

export const Decks: FC<DecksProps> = memo(
  ({ currentCard, currentUserTurn }) => {
    const { user } = useAppSelector((state) => state.userReducer)
    const isUserTurn = user?.id === currentUserTurn

    const bankDeckClick = () => {
      if (!isUserTurn) {
        return
      }
    }

    return (
      <div className={styles.decks}>
        <div className={styles.bankDeck}>
          <Card
            isUnknown={true}
            click={bankDeckClick}
            isClickable={isUserTurn}
          />
        </div>

        <Card card={currentCard} isClickable={false} />
      </div>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.currentCard.id === nextProps.currentCard.id &&
      prevProps.currentUserTurn === nextProps.currentUserTurn
    )
  }
)
