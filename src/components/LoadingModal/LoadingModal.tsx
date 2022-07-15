import React, { FC } from 'react'
import { Loader, LoaderType } from '../UI/Loader/Loader'
import styles from './LoadingModal.module.scss'

type LoadingModalProps = {
  type?: 'white' | 'black'
}

export const LoadingModal: FC<LoadingModalProps> = ({ type }) => {
  return (
    <div className={type ? styles[type] : styles.black}>
      <h1>Подключение...</h1>
      <div className={styles.loader}>
        <Loader type={type ? LoaderType[type] : LoaderType.black} />
      </div>
    </div>
  )
}
