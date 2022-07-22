import { CardType } from './CardType'

export type OpponentType = {
  cardCount: number
  name: string
  id: number
}

export type GameType = {
  id: number
  currentCard: CardType
  userCards: CardType[]
  opponent: OpponentType
  currentPlayerTurnId: number
  over: boolean
}
