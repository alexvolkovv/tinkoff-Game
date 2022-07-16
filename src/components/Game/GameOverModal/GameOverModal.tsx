import React from 'react'
import { Button, ButtonTypes } from '../../UI/Button/Button'
import { useAppSelector } from '../../../hooks/redux'
import { useNavigate } from 'react-router-dom'
import styles from './GameOverModal.module.scss'

export const GameOverModal = () => {
  const { game } = useAppSelector((state) => state.gameReducer)
  const { user } = useAppSelector((state) => state.userReducer)
  const navigate = useNavigate()

  return (
    <div>
      <h2>Игра завершилась</h2>
      Победитель:{' '}
      {game?.opponent.cardCount === 0 ? game.opponent.name : user?.name}
      <div className={styles.footer}>
        <Button
          btnType={ButtonTypes.grey}
          onClick={() => {
            navigate('/')
          }}
        >
          Выйти
        </Button>
      </div>
    </div>
  )
}
