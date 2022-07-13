import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { ErrorModal } from '../../ErrorModal/ErrorModal'
import { LoadingModal } from '../../LoadingModal/LoadingModal'
import { Navigate } from 'react-router-dom'

type RoomListModalProps = {
  setModalVisible: (visible: boolean) => void
}

export const RoomListModal: FC<RoomListModalProps> = ({ setModalVisible }) => {
  const { isLoading, error, currentRoom } = useAppSelector(
    (state) => state.currentRoomReducer
  )

  if (isLoading) {
    return <LoadingModal />
  }

  if (error) {
    return <ErrorModal error={error} setModalVisible={setModalVisible} />
  }

  if (currentRoom) {
    return <Navigate to={'/room/' + currentRoom.id} />
  }

  return <div></div>
}
