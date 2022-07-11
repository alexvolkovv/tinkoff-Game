import React, { useCallback, useState } from 'react'
import styles from './HomeFooter.module.scss'
import { Button } from '../UI/Button/Button'
import { Modal } from '../UI/Modal/Modal'

export const HomeFooter = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const showModal = useCallback(() => {
    setModalVisible(true)
  }, [])

  return (
    <div className={styles.footer}>
      <Button onClick={showModal}>Создать комнату</Button>
      <Modal setModalVisible={setModalVisible} visible={modalVisible}>
        test
      </Modal>
    </div>
  )
}
