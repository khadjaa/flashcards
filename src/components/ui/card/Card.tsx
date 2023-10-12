import { ReactNode } from 'react'

import styles from './Card.module.scss'

export type CardType = {
  className?: string
  children?: ReactNode
}

export const Card = ({ className, ...rest }: CardType) => {
  return <div className={styles.card + ' ' + `${className ?? ''}`} {...rest} />
}
