import { UIButtonProps } from '@/types/common'
import cn from 'classnames'
import React from 'react'
import styles from './Button.module.scss'

export const Button: React.FC<UIButtonProps> = ({
  label,
  size = 'medium',
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[`button--${size}`],
        className
      )}
      {...rest}
    >
      {label ?? children}
    </button>
  )
}
