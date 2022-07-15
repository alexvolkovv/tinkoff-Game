import React, { FC, memo } from 'react'
import { CardType } from '../../../models/CardType'
import styles from './Card.module.scss'
import backCard from '../../../assets/game/cards/card-back.png'

type CardProps = {
  card?: CardType
  isUnknown?: boolean
  click?: () => void
  [attribute: string]: any
}

export const Card: FC<CardProps> = memo(({ card, isUnknown, click }) => {
  return (
    <div
      className={styles.card}
      onClick={() => {
        if (click) {
          click()
        }
      }}
    >
      {isUnknown ? (
        <img src={backCard} alt="Unknown card" />
      ) : (
        <img src={card?.img} alt="Card" />
      )}
    </div>
  )
})
