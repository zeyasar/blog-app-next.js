import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <span>BLOG</span>
      </Link>
      <nav>
        <Link href='https://github.com/zeyasar' target='_blank'>
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header