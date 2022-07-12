import React, { FC, useCallback, useState } from 'react'
import styles from './RoomList.module.scss'
import { RoomListItem } from './RoomListItem/RoomListItem'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Loader } from '../UI/Loader/Loader'
import { getCurrentRoom } from '../../store/reducers/currentRoom/actionCreators'
import { RoomType } from '../../models/RoomType'
import { Modal } from '../UI/Modal/Modal'
import { RoomListModal } from './RoomListModal/RoomListModal'

export const RoomList: FC = () => {
  const { rooms, isLoading } = useAppSelector((state) => state.roomsReducer)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const clickItem = useCallback((room: RoomType) => {
    setModalVisible(true)
    dispatch(getCurrentRoom(room.id))
  }, [])

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
        rooms.map((room) => (
          <RoomListItem click={clickItem} room={room} key={room.id} />
        ))
      ) : (
        <p>Комнат не найдено</p>
      )}

      {modalVisible && (
        <Modal canExit={false} setModalVisible={setModalVisible}>
          <RoomListModal setModalVisible={setModalVisible} />
        </Modal>
      )}
    </div>
  )
}
