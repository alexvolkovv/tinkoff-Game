export enum Colors {
  RED = 'R',
  BLUE = 'B',
  YELLOW = 'Y',
  GREEN = 'G',
}

type CardNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type CardValues = CardNumbers | 'reverse' | '+2' | '+4' | 'color' | 'skip'

export type CardType = {
  id?: number
  cardValue: CardValues
  color: Colors | null
  img: string
}
