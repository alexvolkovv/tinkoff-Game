import React, { FC } from 'react'
import styles from './Button.module.scss'

export enum ButtonTypes {
  white = 'white',
  danger = 'danger',
  grey = 'grey',
}

type ButtonProps = {
  [attribute: string]: any
  children?: React.ReactNode
  btnType: ButtonTypes
}

export const Button: FC<ButtonProps> = React.memo(
  ({ children, btnType, ...props }) => {
    let classes = props['className']
      ? styles.button + ' ' + props['className']
      : styles.button
    classes = classes + ' ' + styles[btnType]

    return (
      <button {...props} className={classes}>
        {children}
      </button>
    )
  }
)
