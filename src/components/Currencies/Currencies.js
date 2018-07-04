import React, { PureComponent } from 'react';
import { currencyPresenter } from 'presenters/currencyPresenter';
import styles from './Currencies.css';

export class Currencies extends PureComponent {
    componentDidMount() {
        this.props.getCurrency();
    }
    render() {
        const { USD, EUR, RUB } = this.props.rates;
        return (
            <div className={styles.root}>
                <div className={styles.back}>
                    <div className={styles.title}>currency<br/>courses</div>
                    <div className={styles.dollar}>$
                        <div className={styles.dollar__value}>{currencyPresenter.out(USD)}</div>
                    </div>
                    <div className={styles.euro}>€
                        <div className={styles.euro__value}>{currencyPresenter.out(EUR)}</div>
                    </div>
                    <div className={styles.rub}>₽
                        <div className={styles.rub__value}>{currencyPresenter.out(RUB)}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Currencies;