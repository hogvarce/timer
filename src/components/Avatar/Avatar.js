import React from 'react';
import styles from './Avatar.css';

const Avatar = () => (
    <div className={styles.root}>
        <img src="./avatar.png" alt="" className={styles.img} />
    </div>
);

export default Avatar;