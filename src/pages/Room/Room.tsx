import React, { FC, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { setCurrentRoom } from '../../store/reducers/currentRoom/CurrentRoomSlice'

export const Room: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(setCurrentRoom(null))
    }
  }, [])

  return <div>Игра</div>
}
