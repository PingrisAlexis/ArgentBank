import React from 'react';
import styles from './FeatureItem.module.scss';
import PropTypes from 'prop-types';

/**
 * @name FeatureItem
 * @description This component will render one feature item.
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
    );
};

FeatureItem.propTypes = {
    featureContent: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        imgAlt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default FeatureItem;
