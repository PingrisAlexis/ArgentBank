import React from 'react';
import styles from './NotFound.module.scss';

/**
 * @name NotFound
 * @description This view will render the error 404 page.
 * @returns {JSX.Element}
 */

const NotFound = () => {
    return (
        <main className={styles.NotFound_container}>
            <h1>404</h1>
            <h2>This page does not exist.</h2>
        </main>
    );
};
export default NotFound;
