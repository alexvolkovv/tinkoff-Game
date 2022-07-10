import React, { FC, useEffect } from 'react'
import { Button } from '../../components/UI/Button/Button'
import { Input } from '../../components/UI/Input/Input'
import styles from './Home.module.scss'
import { RoomList } from '../../components/RoomList/RoomList'
import { useAppDispatch } from '../../hooks/redux'
import { getRooms } from '../../store/reducers/rooms/actionCreators'

export const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRooms())
  }, [])

  return (
    <div className={'main-container'}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h2>Список комнат</h2>
          <Button>Обновить</Button>
        </header>
        <div className={styles.content}>
          <Input placeholder={'Поиск команты...'} className={styles.search} />
          <RoomList />
        </div>
        <div className={styles.footer}>
          <Button>Создать комнату</Button>
        </div>
      </div>
    </div>
  )
}
