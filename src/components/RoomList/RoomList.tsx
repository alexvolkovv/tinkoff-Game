import React, { FC } from 'react'
import styles from './RoomList.module.scss'
import { RoomListItem } from './RoomListItem/RoomListItem'
import { useAppSelector } from '../../hooks/redux'
import { Loader } from '../UI/Loader/Loader'

export const RoomList: FC = () => {
  const { rooms, isLoading } = useAppSelector((state) => state.roomsReducer)

  if (isLoading) {
    return (
      <div className={styles.roomListLoading}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={styles.roomList}>
      {rooms.length ? (
        rooms.map((room) => <RoomListItem room={room} key={room.id} />)
      ) : (
        <p>Комнат не найдено</p>
      )}
    </div>
  )
}
