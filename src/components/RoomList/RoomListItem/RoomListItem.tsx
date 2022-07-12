import React, { FC, memo } from 'react'
import styles from './RoomListItem.module.scss'
import { RoomType } from '../../../models/RoomType'

type RoomListItemProps = {
  room: RoomType
  click: (room: RoomType) => void
}

export const RoomListItem: FC<RoomListItemProps> = memo(({ room, click }) => {
  return (
    <div
      className={styles.listItem}
      onClick={() => {
        click(room)
      }}
    >
      <div className="name">{room.name}</div>
      <div className="playerCount">
        {room.count}/{room.maxCount}
      </div>
    </div>
  )
})
