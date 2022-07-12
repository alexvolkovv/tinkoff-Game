import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import styles from './CreateRoomModal.module.scss'
import { Input } from '../../UI/Input/Input'
import { Button, ButtonTypes } from '../../UI/Button/Button'

type CreateRoomModalProps = {
  setModalVisible: (visible: boolean) => void
}

export const CreateRoomModal: FC<CreateRoomModalProps> = ({
  setModalVisible,
}) => {
  const [roomName, setRoomName] = useState<string>('')
  const roomNameRef = useRef<HTMLInputElement>()

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

    setModalVisible(false)
  }

  useEffect(() => {
    roomNameRef.current?.focus()
  }, [])

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
