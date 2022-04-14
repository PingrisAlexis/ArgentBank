import styles from './TransactionCard.module.scss';
import PropTypes from 'prop-types';
import FeatureItem from '../feature-item/FeatureItem';

/**
 * @name TransactionCard
 * @description This component will render one transaction card.
 * @param {object} transactionContent
 * @param {string} transactionContent.title
 * @param {string} transactionContent.amount
 * @param {string} transactionContent.description
 * @returns {JSX.Element}
 */

const TransactionCard = ({ transactionContent }) => {
    return (
        <section className={styles.transaction_card_container}>
            <div className={styles.transaction_card_part_left}>
                <h3 className={styles.account_title}>
                    {transactionContent.title}
                </h3>
                <p className={styles.account_amount}>
                    {transactionContent.amount}
                </p>
                <p className={styles.account_amount_description}>
                    {transactionContent.description}
                </p>
            </div>
            <div className={styles.transaction_card_part_right}>
                <button className={styles.transaction_button} type="button">
                    View transactions
                </button>
            </div>
        </section>
    );
};

TransactionCard.propTypes = {
    transactionContent: PropTypes.shape({
        id: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default TransactionCard;
