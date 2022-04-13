import React from 'react'
import styles from './FeatureItem.module.scss'

/**
 * @name FeatureItem
 * @description This is the Feature item component.
 * @param {object} featureContent
 * @param {string} featureContent.imgSrc
 * @param {string} featureContent.title
 * @param {string} featureContent.description
 * @returns {JSX.Element}
 */

const FeatureItem = ({ featureContent }) => {
    return (
        <div className={styles.feature_item}>
            <img
                src={featureContent.imgSrc}
                alt={featureContent.imgAlt}
                className={styles.feature_icon}
            />
            <h3 className={styles.feature_item_title}>
                {featureContent.title}
            </h3>
            <p>{featureContent.description}</p>
        </div>
    )
}

export default FeatureItem
