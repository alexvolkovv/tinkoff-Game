import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './Login.module.scss'
import { Input } from '../../components/UI/Input/Input'
import { Button } from '../../components/UI/Button/Button'
import { useAppDispatch } from '../../hooks/redux'
import { setUser } from '../../store/reducers/UserSlice'
import { useNavigate } from 'react-router-dom'
import { RouteTypes } from '../../routes'

export const Login: FC = () => {
  const [userName, setUserName] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(
      setUser({
        id: Math.random(),
        name: userName,
        roomId: null,
      })
    )

    navigate(RouteTypes.HOME)
  }

  return (
    <div className={'main-container'}>
      <form onSubmit={submitForm} className={styles.form}>
        <h1 className={styles.title}>Введите имя:</h1>
        <Input
          placeholder={'Имя...'}
          className={styles.name}
          type="text"
          value={userName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        />
        <Button type={'submit'} className={styles.submit}>
          OK
        </Button>
      </form>
    </div>
  )
}
