import React  from 'react';
import PropTypes from 'prop-types';
import add_icon from 'static/add_icon.png';
import styles from './AddTimer.css';

const AddTimer = ({ addNewTimer }) => (
    <div className={styles.root} onClick={addNewTimer}>
        <img src={add_icon} alt="add timer" />
        <div className={styles.add_text}>ADD TIMER</div>
    </div>
);

AddTimer.propTypes = {
    addNewTimer: PropTypes.func.isRequired,
};

export default AddTimer;