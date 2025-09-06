import React from 'react';
import * as styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.text}>Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;