import React from 'react';
import styles from './Avatar.css';

const Avatar = () => (
    <div className={styles.root}>
        <div className={styles.avatar}>
            <img src="./avatar.png" alt="" className={styles.img} />
        </div>
        <span className={styles.user_name}>Mila Kunis</span>
    </div>
);

export default Avatar;