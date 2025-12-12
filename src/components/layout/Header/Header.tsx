import BurgerMenu from '@/components/ui/BurgerMenu/BurgerMenu'
import SearchModal from '@/components/ui/SearchModal/SearchModal'
import { navNext, navPrev } from '@/types/common'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import NavList from './NavList'

const Header: React.FC = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	return (
		<header className={styles.header}>
			<BurgerMenu />

			<div className={styles.nav}>
				<NavList
					items={navPrev}
					className={styles.navChild}
					linkClassName={styles.navLink}
					activeClass={styles.active}
				/>

				<div className={styles.logo}>
					<Link to="/" className={styles.logoPc}>WELL <span>SHOES</span></Link>
					<Link to="/" className={styles.logoMob}>W<span>S</span></Link>
				</div>

				<NavList
					items={navNext}
					className={styles.navChild}
					linkClassName={styles.navLink}
					activeClass={styles.active}
				/>
			</div>

			<button
				type="button"
				className={styles.search}
				onClick={() => setIsSearchOpen(true)}
			>
				<Search size={36} />
			</button>

			<SearchModal
				isOpen={isSearchOpen}
				onClose={() => setIsSearchOpen(false)}
			/>
		</header>
	)
}

export default Header