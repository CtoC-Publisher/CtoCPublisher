import React, { useState, useEffect } from 'react';
import * as styles from './Slider.module.css';
import Slick from 'react-slick';

const Slider = (props) => {
  const { children, settings, spacing } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const customPaging = () => {
    return <div className={styles.mobilePagination}></div>;
  };

  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: `${styles.customDots}`,
    customPaging: customPaging,
  };

  if (!isClient) {
    return (
      <div className={`${styles.root} ${spacing === true ? styles.spacing : ''}`}>
        <div style={{ display: 'flex', overflowX: 'auto' }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.root} ${spacing === true ? styles.spacing : ''}`}>
      <Slick {...defaultSettings} {...settings}>
        {children}
      </Slick>
    </div>
  );
};

export default Slider;
