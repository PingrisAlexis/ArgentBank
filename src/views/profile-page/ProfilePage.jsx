import React from 'react'
import { useSelector } from 'react-redux'
import { TRANSACTIONS_CARDS_CONTENT } from '../../datas/data'
import styles from './ProfilePage.module.scss'
import { LoaderSpinner, TransactionCard, Welcome } from '../../components'
import {
    isLoadingSelector,
    isLoggedInSelector,
} from '../../store/selectors/selectors'

const ProfilePage = () => {
    const isLoading = useSelector(isLoadingSelector)
    const isLoggedIn = useSelector(isLoggedInSelector)

    return isLoading ? (
        <LoaderSpinner />
    ) : isLoggedIn ? (
        <main className={styles.profile_page_container}>
            <Welcome />
            {TRANSACTIONS_CARDS_CONTENT.map((item) => {
                return <TransactionCard key={item.id} item={item} />
            })}
        </main>
    ) : null
}
export default ProfilePage
