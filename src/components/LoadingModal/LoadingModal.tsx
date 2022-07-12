import React from 'react'
import { Loader, LoaderType } from '../UI/Loader/Loader'
import styles from './LoadingModal.module.scss'

export const LoadingModal = () => {
  return (
    <div>
      <h1>Подключение...</h1>
      <div className={styles.loader}>
        <Loader type={LoaderType.black} />
      </div>
    </div>
  )
}
