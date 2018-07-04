import React from 'react';
import styles from './Currencies.css';

const Currencies = () => (
    <div className={styles.root}>
        <div className={styles.back}>
            <div className={styles.title}>currency<br />courses</div>
            <div className={styles.dollar}>$<div className={styles.dollar__value}>26.6</div></div>
            <div className={styles.euro}>$<div className={styles.euro__value}>26.6</div></div>
            <div className={styles.rub}>$<div className={styles.rub__value}>26.6</div></div>
        </div>
    </div>
);

export default Currencies;