import React from 'react';
import { useSelector } from 'react-redux';
import { TRANSACTIONS_CARDS_CONTENT } from '../../datas/data';
import styles from './ProfilePage.module.scss';
import {
    LoaderSpinner,
    TransactionCard,
    EditUserNameForm,
} from '../../components';
import {
    isLoadingSelector,
    isLoggedInSelector,
    userSelector,
} from '../../store/selectors/selectors';

/**
 * @name ProfilePage
 * @description This view will render the profile page.
 * @returns {JSX.Element}
 */

const ProfilePage = () => {
    const isLoading = useSelector(isLoadingSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);
    const user = useSelector(userSelector);

    return isLoading ? (
        <LoaderSpinner />
    ) : isLoggedIn ? (
        <main className={styles.profile_page_container}>
            <section>
                <h2>
                    Welcome back{' '}
                    <b>
                        {user.firstName} {user.lastName}
                    </b>
                </h2>
                <EditUserNameForm />
            </section>
            {TRANSACTIONS_CARDS_CONTENT.map((item) => {
                return (
                    <TransactionCard key={item.id} transactionContent={item} />
                );
            })}
        </main>
    ) : null;
};
export default ProfilePage;
