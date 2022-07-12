import React, { useState } from 'react'
import styles from './HomeFooter.module.scss'
import { Button, ButtonTypes } from '../UI/Button/Button'
import { Modal } from '../UI/Modal/Modal'
import { CreateRoomModal } from './CreateRoomModal/CreateRoomModal'

export const HomeFooter = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const showModal = () => {
    setModalVisible(true)
  }

  return (
    <div className={styles.footer}>
      <Button btnType={ButtonTypes.white} onClick={showModal}>
        Создать комнату
      </Button>
      {modalVisible && (
        <Modal canExit={true} setModalVisible={setModalVisible}>
          <CreateRoomModal setModalVisible={setModalVisible} />
        </Modal>
      )}
    </div>
  )
}
