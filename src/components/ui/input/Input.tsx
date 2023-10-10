import { ComponentPropsWithoutRef } from 'react'

import styles from './Input.module.scss'

import { EyeIcon } from '@/assets/icons/EyeIcon.tsx'
import { SearchIcon } from '@/assets/icons/SearchIcon.tsx'

export type InputProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'error'
  placeholderValue?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { variant, className, placeholderValue, disabled, ...rest } = props
  const inputPlaceholder = variant === 'error' ? 'Error' : placeholderValue

  return (
    <div className={styles.inputBox}>
      {variant !== 'tertiary' && (
        <label htmlFor="" className={styles.label}>
          {inputPlaceholder}
        </label>
      )}
      <input
        className={`${styles['primary']} ${className}`}
        {...rest}
        placeholder={inputPlaceholder}
      />
      {variant === 'secondary' ? (
        <EyeIcon
          className={styles.eye}
          color={disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'}
        />
      ) : null}
      {variant === 'tertiary' ? <SearchIcon className={styles.search} /> : null}
      {variant === 'error' ? (
        <label htmlFor="" className={styles.errorLabel}>
          {inputPlaceholder}!
        </label>
      ) : null}
    </div>
  )
}
