import React, { FC } from 'react'
import styles from './Loader.module.scss'

export enum LoaderType {
  white = 'white',
  black = 'black',
}

type LoaderProps = {
  type?: LoaderType
}

export const Loader: FC<LoaderProps> = ({ type }) => {
  let classes = styles.loader

  if (type) {
    classes += ' ' + styles[type]
  } else {
    classes += ' ' + styles.white
  }

  return <div className={classes}></div>
}
