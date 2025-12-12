import { InputProps } from '@/types/common'
import React from 'react'
import styles from './Input.module.scss'

const Input: React.FC<InputProps> = ({
	type = 'text',
	placeholder,
	value,
	onChange,
	className = ''
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={`${styles.input} ${className}`}
		/>
	)
}

export default Input