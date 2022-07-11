import React, { FC, useEffect } from 'react'
import styles from './Home.module.scss'
import { RoomList } from '../../components/RoomList/RoomList'
import { useAppDispatch } from '../../hooks/redux'
import { getRooms } from '../../store/reducers/rooms/actionCreators'
import { HomeHeader } from '../../components/HomeHeader/HomeHeader'
import { HomeFooter } from '../../components/HomeFooter/HomeFooter'

export const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRooms(''))
  }, [])

  return (
    <div className={'main-container'}>
      <div className={styles.wrap}>
        <HomeHeader />
        <RoomList />
        <HomeFooter />
      </div>
    </div>
  )
}
