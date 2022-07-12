import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { ErrorModal } from '../../ErrorModal/ErrorModal'
import { LoadingModal } from '../../LoadingModal/LoadingModal'
import { useNavigate } from 'react-router-dom'

type RoomListModalProps = {
  setModalVisible: (visible: boolean) => void
}

export const RoomListModal: FC<RoomListModalProps> = ({ setModalVisible }) => {
  const { isLoading, error, currentRoom } = useAppSelector(
    (state) => state.currentRoomReducer
  )
  const navigate = useNavigate()

  if (isLoading) {
    return <LoadingModal />
  }

  if (error) {
    return <ErrorModal error={error} setModalVisible={setModalVisible} />
  }

  if (currentRoom) {
    navigate('/room/' + currentRoom.id)
  }

  return <div></div>
}
