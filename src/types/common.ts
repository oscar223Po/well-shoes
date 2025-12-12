export const navPrev = [
	{ path: '/', label: 'Home' },
	{ path: '/about', label: 'About' }
]

export const navNext = [
	{ path: '/catalog', label: 'Catalog' },
	{ path: '/contact', label: 'Contact' }
]

export const menuAdditional = [
	{ path: '/blog-news', label: 'Blog News' },
	{ path: '/career', label: 'Career' },
	{ path: '/cart', label: 'Shopping Cart' }
]

export interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string
	size?: ButtonSize
	className?: string
}

export type ButtonSize = 'large' | 'medium' | 'small'

export const menuPrimary = [...navPrev, ...navNext]

/*
export interface ButtonProps {
	children: React.ReactNode
	variant?: 'primary' | 'secondary' | 'outline'
	size?: 'small' | 'medium' | 'large'
	onClick?: () => void
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
	className?: string
}

export interface ModalPropsInputProps {
	type?: string
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	className?: string
}

export interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
	title?: string
}
*/