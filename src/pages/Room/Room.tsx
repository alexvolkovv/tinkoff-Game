import React, { FC, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCurrentRoom } from '../../store/reducers/currentRoom/CurrentRoomSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { UserType } from '../../models/UserType'
import { changeUser } from '../../store/reducers/user/actionCreators'
import { RoomWaiting } from '../../components/RoomWaiting/RoomWaiting'
import { getCurrentRoom } from '../../store/reducers/currentRoom/actionCreators'
import { Game } from '../../components/Game/Game'
import { useInterval } from '../../hooks/useInterval'
import { Button, ButtonTypes } from '../../components/UI/Button/Button'
import styles from './Room.module.scss'

export const Room: FC = () => {
  const { user } = useAppSelector((state) => state.userReducer)
  const { currentRoom } = useAppSelector((state) => state.currentRoomReducer)
  const dispatch = useAppDispatch()
  const params = useParams()
  const navigate = useNavigate()

  const leaveRoom = useCallback(() => {
    const userWithNullRoom: UserType = {
      id: user?.id,
      name: user?.name!,
      roomId: null,
    }

    dispatch(setCurrentRoom(null))
    dispatch(changeUser(userWithNullRoom))
  }, [])

  const startListening = useInterval(() => {
    dispatch(getCurrentRoom(currentRoom?.id!))
  }, 1000)

  useEffect(() => {
    let interval = startListening()

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const { id } = params

    const changedUser: UserType = {
      id: user?.id,
      name: String(user?.name),
      roomId: Number(id!),
    }

    dispatch(changeUser(changedUser))

    return () => {
      leaveRoom()
    }
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          navigate('/')
        }}
        className={styles.out}
        btnType={ButtonTypes.danger}
      >
        Выйти
      </Button>
      {currentRoom && currentRoom.count < currentRoom.maxCount ? (
        <RoomWaiting />
      ) : (
        <Game />
      )}
    </div>
  )
}
