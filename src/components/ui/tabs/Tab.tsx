import { ComponentPropsWithoutRef } from 'react'

import styles from './Tab.module.scss'

export type TabProps = {
  variant?: 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<'button'>

export const Tab = (props: TabProps) => {
  const { variant = 'primary', className, ...rest } = props

  return <button className={`${styles[variant]} ${styles.div} ${className}`} {...rest} />
}
