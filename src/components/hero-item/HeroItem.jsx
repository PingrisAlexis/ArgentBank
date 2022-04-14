import React from 'react';
import styles from './HeroItem.module.scss';
import PropTypes from 'prop-types';

/**
 * @name HeroItem
 * @description This component will render heroes content.
 * @param {object}
 * @returns {JSX.Element}
 */

const HeroItem = ({ heroContent }) => {
    return <p className={styles.subtitle}>{heroContent.description}</p>;
};

HeroItem.propTypes = {
    heroContent: PropTypes.shape({
        description: PropTypes.string.isRequired,
    }).isRequired,
};
export default HeroItem;
