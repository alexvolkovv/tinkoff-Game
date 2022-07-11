import React from 'react'
import styles from './HomeFooter.module.scss'
import { Button } from '../UI/Button/Button'

export const HomeFooter = () => {
  return (
    <div className={styles.footer}>
      <Button>Создать комнату</Button>
    </div>
  )
}
