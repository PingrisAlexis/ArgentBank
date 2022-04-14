import React from 'react';
import styles from './Footer.module.scss';

/**
 * @name Footer
 * @description This is the footer component.
 * @returns {JSX.Element}
 */

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <p className={styles.footer_text}>Copyright 2020 Argent Bank</p>
        </footer>
    );
};

export default Footer;
