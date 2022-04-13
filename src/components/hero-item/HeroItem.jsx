import React from 'react'
import styles from './HeroItem.module.scss'

const HeroItem = ({ heroContent }) => {
    return <p className={styles.subtitle}>{heroContent.description}</p>
}

export default HeroItem
