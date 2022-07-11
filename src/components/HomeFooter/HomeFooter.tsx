import React, { useCallback, useState } from 'react'
import styles from './HomeFooter.module.scss'
import { Button } from '../UI/Button/Button'
import { Modal } from '../UI/Modal/Modal'
import { CreateRoomModal } from './CreateRoomModal/CreateRoomModal'

export const HomeFooter = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const showModal = useCallback(() => {
    setModalVisible(true)
  }, [])

  return (
    <div className={styles.footer}>
      <Button onClick={showModal}>Создать комнату</Button>
      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          <CreateRoomModal setModalVisible={setModalVisible} />
        </Modal>
      )}
    </div>
  )
}
