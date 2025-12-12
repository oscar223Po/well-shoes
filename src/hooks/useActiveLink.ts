import { useLocation } from 'react-router-dom'

export const useActiveLink = () => {
	const { pathname } = useLocation()
	return (path: string) => pathname === path
}