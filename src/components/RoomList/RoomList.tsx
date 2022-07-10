import React, { FC } from 'react'
import styles from './RoomList.module.scss'
import { RoomListItem } from './RoomListItem/RoomListItem'
import { useAppSelector } from '../../hooks/redux'

export const RoomList: FC = () => {
  const { rooms } = useAppSelector((state) => state.roomsReducer)

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
