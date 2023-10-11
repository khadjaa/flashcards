import { ComponentPropsWithoutRef } from 'react'

import styles from './Typography.module.scss'

export type TypographyProps = {
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'subtitle1'
    | 'body2'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
} & ComponentPropsWithoutRef<'p'>

export const Typography = (props: TypographyProps) => {
  const { variant = 'primary', className, ...rest } = props

  return <p className={`${styles[variant]} ${styles.p}  ${className}`} {...rest} />
}
