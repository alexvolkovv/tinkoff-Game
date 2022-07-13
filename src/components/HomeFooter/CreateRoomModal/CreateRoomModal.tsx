import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import styles from './CreateRoomModal.module.scss'
import { Input } from '../../UI/Input/Input'
import { Button, ButtonTypes } from '../../UI/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { LoadingModal } from '../../LoadingModal/LoadingModal'
import { ErrorModal } from '../../ErrorModal/ErrorModal'
import { createCurrentRoom } from '../../../store/reducers/currentRoom/actionCreators'
import { Navigate } from 'react-router-dom'

type CreateRoomModalProps = {
  setModalVisible: (visible: boolean) => void
}

export const CreateRoomModal: FC<CreateRoomModalProps> = ({
  setModalVisible,
}) => {
  const [roomName, setRoomName] = useState<string>('')
  const roomNameRef = useRef<HTMLInputElement>()
  const { isLoading, error, currentRoom } = useAppSelector(
    (state) => state.currentRoomReducer
  )
  const dispatch = useAppDispatch()
  const changeRoomName = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value)
  }

  const cancelClick = () => {
    setModalVisible(false)
  }

  const submitClick = () => {
    if (!roomName) {
      return
    }

    dispatch(createCurrentRoom(roomName))
  }

  useEffect(() => {
    roomNameRef.current?.focus()
  }, [])

  if (isLoading) {
    return <LoadingModal />
  }

  if (error) {
    return <ErrorModal error={error} setModalVisible={setModalVisible} />
  }

  if (currentRoom) {
    return <Navigate to={'room/' + currentRoom.id} />
  }

  return (
    <div>
      <div className={styles.header}>
        <h2>Создание новой комнаты</h2>
      </div>
      <div className={styles.content}>
        <Input
          ref={roomNameRef}
          placeholder={'Название комнаты...'}
          value={roomName}
          onChange={changeRoomName}
        />
      </div>
      <div className={styles.footer}>
        <Button
          btnType={ButtonTypes.danger}
          onClick={cancelClick}
          className={styles.cancel}
        >
          Отмена
        </Button>
        <Button btnType={ButtonTypes.grey} onClick={submitClick}>
          Создать
        </Button>
      </div>
    </div>
  )
}
