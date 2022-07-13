import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCurrentRoom } from '../../store/reducers/currentRoom/CurrentRoomSlice'
import { useParams } from 'react-router-dom'
import { UserType } from '../../models/UserType'
import { changeUser } from '../../store/reducers/user/actionCreators'
import { RoomWaiting } from '../../components/RoomWaiting/RoomWaiting'

export const Room: FC = () => {
  const { user } = useAppSelector((state) => state.userReducer)
  const { currentRoom } = useAppSelector((state) => state.currentRoomReducer)

  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    const { id } = params

    const changedUser: UserType = {
      id: user?.id,
      name: String(user?.name),
      roomId: Number(id!),
    }

    dispatch(changeUser(changedUser))

    return () => {
      dispatch(setCurrentRoom(null))
      dispatch(changeUser({ ...changedUser, roomId: null }))
    }
  }, [])

  if (currentRoom && currentRoom.count < currentRoom.maxCount) {
    return <RoomWaiting />
  }

  return <div>Игра</div>
}
