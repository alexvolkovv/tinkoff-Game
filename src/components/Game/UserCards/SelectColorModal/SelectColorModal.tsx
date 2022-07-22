import React, { FC } from 'react'
import styles from './SelectColorModal.module.scss'
import { CardType } from '../../../../models/CardType'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { changeGame } from '../../../../store/reducers/game/actionCreators'

const colors: string[] = ['R', 'G', 'B', 'Y']

type SelectColorModalProps = {
  card: CardType
  setModalVisible: (visible: boolean) => void
}

export const SelectColorModal: FC<SelectColorModalProps> = ({
  setModalVisible,
  card,
}) => {
  const { user } = useAppSelector((state) => state.userReducer)
  const { currentRoom } = useAppSelector((state) => state.currentRoomReducer)

  const dispatch = useAppDispatch()

  function selectColor(color: string) {
    dispatch(
      changeGame({
        userId: user?.id!,
        roomId: currentRoom?.id!,
        cardId: card.id!,
        newColor: color,
      })
    )
    setModalVisible(false)
  }

  return (
    <div>
      <div className={styles.header}>
        <h2>Выбор цвета</h2>
      </div>

      <div className={styles.colors}>
        {colors.map((color) => (
          <div
            className={styles[color] + ' ' + styles.color}
            onClick={() => {
              selectColor(color)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
