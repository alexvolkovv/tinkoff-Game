import React, { FC, memo } from 'react'
import { Card } from '../Card/Card'
import { CardType } from '../../../models/CardType'
import styles from './Decks.module.scss'

type DecksProps = {
  currentCard: CardType
}

export const Decks: FC<DecksProps> = memo(
  ({ currentCard }) => {
    return (
      <div className={styles.decks}>
        <div className={styles.bankDeck}>
          <Card isUnknown={true} />
        </div>

        <Card card={currentCard} />
      </div>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.currentCard.id === nextProps.currentCard.id
  }
)
