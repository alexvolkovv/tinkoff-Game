import React, { FC, ReactNode } from 'react'
import styles from './Modal.module.scss'

type ModalProps = {
  setModalVisible: (visible: boolean) => void
  children: ReactNode
}

export const Modal: FC<ModalProps> = ({ setModalVisible, children }) => {
  const outsideClick = () => {
    setModalVisible(false)
  }

  const insideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div className={styles.modal} onClick={outsideClick}>
      <div className={styles.content} onClick={insideClick}>
        {children}
      </div>
    </div>
  )
}
