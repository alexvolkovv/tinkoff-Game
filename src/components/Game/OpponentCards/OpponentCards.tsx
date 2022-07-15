import React, { FC, memo, useMemo } from 'react'
import { Card } from '../Card/Card'
import userCardStyles from '../UserCards/UserCards.module.scss'
import { OpponentType } from '../../../models/GameType'

type OpponentCardsProps = {
  opponent: OpponentType
  currentUserTurn: number
}

export const OpponentCards: FC<OpponentCardsProps> = memo(
  ({ opponent, currentUserTurn }) => {
    const wrapStyles = [userCardStyles.wrap, userCardStyles.wrapReverse]
    const nameStyles = [
      userCardStyles.name,
      currentUserTurn === opponent.id ? userCardStyles.changingOpacity : '',
    ]
    const cards = useMemo(() => {
      const cards = []

      for (let i = 0; i < opponent.cardCount; i++) {
        cards.push(<Card key={Math.random()} isUnknown={true} />)
      }

      return cards
    }, [opponent.cardCount])

    return (
      <div className={wrapStyles.join(' ')}>
        <div className={nameStyles.join(' ')}>{opponent.name}</div>
        <div className={userCardStyles.line}></div>
        <div className={userCardStyles.cards}>{cards}</div>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.opponent.cardCount === nextProps.opponent.cardCount &&
      prevProps.currentUserTurn === nextProps.currentUserTurn
    )
  }
)
