import React, { FC } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  [attribute: string]: any
  children?: React.ReactNode
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const classes = props['className']
    ? styles.button + ' ' + props['className']
    : styles.button

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
