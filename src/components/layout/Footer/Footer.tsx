import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
	 <div className={styles.footer}>
		<div className="container">
		  <p>Footer</p>
		</div>
	 </div>
  );
};

export default Footer;