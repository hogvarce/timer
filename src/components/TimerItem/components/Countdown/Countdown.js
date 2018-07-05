import React from 'react';
import PropTypes from 'prop-types';
import styles from './Countdown.css'

const Countdown = (props, context) => {
    const d = new Date(context.remaining);
    const { hours, minutes, seconds } = {
        hours: d.getUTCHours(),
        minutes: d.getUTCMinutes(),
        seconds: d.getUTCSeconds(),
    };
    return (
        <div className={styles.root}>
            <div className={styles.hour}>{hours}</div>
            <div className={styles.minute}>:{minutes}</div>
            <div className={styles.second}>:{seconds}</div>
        </div>
    );
};

Countdown.contextTypes = {
    remaining: PropTypes.number,
};

export default Countdown;