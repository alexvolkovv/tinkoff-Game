import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { ErrorModal } from '../../ErrorModal/ErrorModal'
import { LoadingModal } from '../../LoadingModal/LoadingModal'
import { Navigate } from 'react-router-dom'
import { setCurrentRoom } from '../../../store/reducers/currentRoom/CurrentRoomSlice'

type RoomListModalProps = {
  setModalVisible: (visible: boolean) => void
}

export const RoomListModal: FC<RoomListModalProps> = ({ setModalVisible }) => {
  const dispatch = useAppDispatch()
  const { isLoading, error, currentRoom } = useAppSelector(
    (state) => state.currentRoomReducer
  )

  const closeErrorModal = (visible: boolean) => {
    setModalVisible(visible)
    dispatch(setCurrentRoom(null))
  }

  if (isLoading) {
    return <LoadingModal />
  }

  if (error) {
    return <ErrorModal error={error} setModalVisible={setModalVisible} />
  }

  if (currentRoom && currentRoom.maxCount === currentRoom.count) {
    return (
      <ErrorModal
        error={'Достигнуто макисмальное количество игроков'}
        setModalVisible={closeErrorModal}
      />
    )
  }

  if (currentRoom) {
    return <Navigate to={'/room/' + currentRoom.id} />
  }

  return <div></div>
}
