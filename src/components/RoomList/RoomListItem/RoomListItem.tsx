import React, { FC } from 'react'
import styles from './RoomListItem.module.scss'
import { RoomType } from '../../../models/RoomType'

type RoomListItemProps = {
  room: RoomType
}

export const RoomListItem: FC<RoomListItemProps> = ({ room }) => {
  return (
    <div className={styles.listItem}>
      <div className="name">{room.name}</div>
      <div className="playerCount">
        {room.count}/{room.maxCount}
      </div>
    </div>
  )
}
