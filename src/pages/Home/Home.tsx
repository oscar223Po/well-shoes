import React from 'react'
import styles from './Home.module.scss'

const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={`__container ${styles.container}`}>
        <p>Home</p>
      </div>
    </div>
  )
}

export default Home