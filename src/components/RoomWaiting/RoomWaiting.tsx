import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getCurrentRoom } from '../../store/reducers/currentRoom/actionCreators'

export const RoomWaiting = () => {
  const { currentRoom } = useAppSelector((state) => state.currentRoomReducer)
  const dispatch = useAppDispatch()
  const startWaiting = useCallback(
    () =>
      setInterval(() => {
        dispatch(getCurrentRoom(currentRoom?.id!))
      }, 500),
    []
  )

  useEffect(() => {
    let interval = startWaiting()

    return () => {
      clearInterval(interval)
    }
  }, [])
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
