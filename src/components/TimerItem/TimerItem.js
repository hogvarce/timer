import React  from 'react';
import PropTypes from 'prop-types';
import Timer from 'react-timer-component';
import Countdown from './components/Countdown';
import styles from './TimerItem.css';

const TimerItem = ({ name, timeLeft, styleDiv }) => (
    <div className={styles.root} style={styleDiv}>
        <Timer remaining={timeLeft}>
            <Countdown/>
        </Timer>
        <div className={styles.name}>{name}</div>
    </div>
);

TimerItem.propTypes = {
    name: PropTypes.string.isRequired,
    timeLeft: PropTypes.number.isRequired,
    background: PropTypes.Object,
};

export default TimerItem;