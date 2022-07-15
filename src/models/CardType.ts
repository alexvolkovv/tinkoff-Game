export enum Colors {
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  GREEN = 'green',
}

type CardNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type CardValues = CardNumbers | 'reverse' | '+2' | '+4' | 'color'

export type CardType = {
  id?: number
  value: CardValues
  color: Colors | null
  img: string
}
