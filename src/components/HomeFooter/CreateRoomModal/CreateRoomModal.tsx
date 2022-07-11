import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './CreateRoomModal.module.scss'
import { Input } from '../../UI/Input/Input'
import { Button } from '../../UI/Button/Button'

type CreateRoomModalProps = {
  setModalVisible: (visible: boolean) => void
}

export const CreateRoomModal: FC<CreateRoomModalProps> = ({
  setModalVisible,
}) => {
  const [roomName, setRoomName] = useState<string>('')
  const roomNameRef = useRef<HTMLInputElement>()

  function changeRoomName(event: ChangeEvent<HTMLInputElement>) {
    setRoomName(event.target.value)
  }

  const cancelClick = useCallback(() => {
    setModalVisible(false)
  }, [])

  const submitClick = useCallback(() => {
    if (!roomName) {
      return
    }

    setModalVisible(false)
  }, [roomName])

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
        <Button onClick={cancelClick} className={styles.cancel}>
          Отмена
        </Button>
        <Button onClick={submitClick}>Создать</Button>
      </div>
    </div>
  )
}
