import react from 'react'
import styles from './TransactionCard.module.scss'

const TransactionCard = ({ item }) => {
    return (
        <section className={styles.transaction_card_container}>
            <div className={styles.transaction_card_part_left}>
                <h3 className={styles.account_title}>
                    {'Argent Bank Checking '}
                    {item.title}
                </h3>
                <p className={styles.account_amount}>{item.amount}</p>
                <p className={styles.account_amount_description}>
                    {item.description}
                </p>
            </div>
            <div className={styles.transaction_card_part_right}>
                <button className={styles.transaction_button} type="button">
                    View transactions
                </button>
            </div>
        </section>
    )
}
export default TransactionCard
