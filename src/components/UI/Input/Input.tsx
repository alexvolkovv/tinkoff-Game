import React, { FC } from 'react'
import styles from './Input.module.scss'

type InputProps = {
  [attribute: string]: any
}

export const Input: FC<InputProps> = ({ ...props }) => {
  let classes: string = props['className']
    ? props['className'] + ' ' + styles.input
    : styles.input

  return <input {...props} className={classes} />
}
