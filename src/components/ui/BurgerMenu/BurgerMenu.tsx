import { Button } from '@/components/common/Button/Button'
import NavList from '@/components/layout/Header/NavList'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { menuAdditional, menuPrimary } from '@/types/common'
import { TextAlignJustify, X } from 'lucide-react'
import React, { useState } from 'react'
import styles from './BurgerMenu.module.scss'

const BurgerMenu: React.FC = () => {
	const [open, setOpen] = useState(false)

	const toggle = () => setOpen(prev => !prev)
	const close = () => setOpen(false)

	useLockBodyScroll(open)

	return (
		<div className={styles.menu}>
			<button
				type="button"
				className={`${styles.button} ${open ? styles.open : ''}`}
				onClick={toggle}
			>
				<TextAlignJustify size={36} />
			</button>

			{open && (
				<>
					<div className={styles.overlay} onClick={close} />

					<div className={styles.main}>
						<div className={styles.wrapper}>
							<div className={styles.head}>
								<div className={styles.label}>
									<div>
										Update <b>Your</b> <span>Lifestyle</span>
									</div>
								</div>
								<button type="button" className={styles.close} onClick={close}>
									<X size={38} />
								</button>
							</div>

							<NavList
								items={menuPrimary}
								className={styles.primary}
								linkClassName={styles.navLink}
								activeClass={styles.active}
								onItemClick={close}
							/>

							<NavList
								items={menuAdditional}
								className={styles.additional}
								linkClassName={styles.navLink}
								activeClass={styles.active}
								onItemClick={close}
							/>
						</div>

						<Button
							size="medium"
							label="View Catalog"
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default BurgerMenu