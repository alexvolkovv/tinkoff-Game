import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './Login.module.scss'
import { Input } from '../../components/UI/Input/Input'
import { Button, ButtonTypes } from '../../components/UI/Button/Button'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { createUser } from '../../store/reducers/user/actionCreators'

export const Login: FC = () => {
  const [userName, setUserName] = useState<string>('')
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.userReducer)

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (userName) {
      dispatch(createUser(userName))
    }
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
        <Button
          btnType={ButtonTypes.white}
          disabled={isLoading}
          type={'submit'}
          className={styles.submit}
        >
          OK
        </Button>
      </form>
    </div>
  )
}
