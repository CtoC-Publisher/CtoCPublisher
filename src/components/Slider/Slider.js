import React from 'react';
import * as styles from './Slider.module.css';

const Slider = (props) => {
  const { children, spacing } = props;

  return (
    <div className={`${styles.root} ${spacing === true ? styles.spacing : ''}`}>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
        {children}
      </div>
    </div>
  );
};

export default Slider;
