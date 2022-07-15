import React from 'react'
import { useAppSelector } from '../../hooks/redux'

export const RoomWaiting = () => {
  const { currentRoom } = useAppSelector((state) => state.currentRoomReducer)

  return (
    <div className={'main-container'}>
      <div style={{ color: 'white' }}>
        <h1>Комната: {currentRoom?.name}</h1>
        <h2>
          Игроков: {currentRoom?.count} / {currentRoom?.maxCount}
        </h2>
        <h2>Ожидаем игроков...</h2>
      </div>
    </div>
  )
}
