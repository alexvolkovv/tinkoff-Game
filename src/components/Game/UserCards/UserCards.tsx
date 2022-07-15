import React, { FC, memo } from 'react'
import { CardType } from '../../../models/CardType'
import { Card } from '../Card/Card'
import styles from './UserCards.module.scss'
import { useAppSelector } from '../../../hooks/redux'
import userCardStyles from './UserCards.module.scss'

type UserCardsProps = {
  userCards: CardType[]
  currentUserTurn: number
}

export const UserCards: FC<UserCardsProps> = memo(
  ({ userCards, currentUserTurn }) => {
    const { user } = useAppSelector((state) => state.userReducer)
    const nameStyles = [
      userCardStyles.name,
      currentUserTurn === user?.id ? userCardStyles.changingOpacity : '',
    ]

    return (
      <div className={styles.wrap}>
        <div className={nameStyles.join(' ')}>{user?.name}</div>
        <div className={styles.border}></div>
        <div className={styles.cards}>
          {userCards &&
            userCards.map((card) => <Card key={card.id} card={card} />)}
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.userCards.length === nextProps.userCards.length &&
      prevProps.currentUserTurn === nextProps.currentUserTurn
    )
  }
)
