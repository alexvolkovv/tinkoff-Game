import React, { FC, ForwardedRef } from 'react'
import styles from './Input.module.scss'

type InputProps = {
  [attribute: string]: any
}

export const Input: FC<InputProps> = React.memo(
  React.forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    let classes: string = props['className']
      ? props['className'] + ' ' + styles.input
      : styles.input

    return <input {...props} className={classes} ref={ref} />
  })
)
