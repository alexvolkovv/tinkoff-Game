import React, { FC } from 'react'
import styles from './ErrorModal.module.scss'
import { Button, ButtonTypes } from '../UI/Button/Button'

type ErrorModalProps = {
  setModalVisible: (visible: boolean) => void
  error: string
}

export const ErrorModal: FC<ErrorModalProps> = ({ setModalVisible, error }) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Ошибка</h1>
      </div>
      <div className={styles.content}>
        <p>{error}</p>
      </div>
      <div className={styles.footer}>
        <Button
          btnType={ButtonTypes.grey}
          onClick={() => {
            setModalVisible(false)
          }}
        >
          ОК
        </Button>
      </div>
    </div>
  )
}
