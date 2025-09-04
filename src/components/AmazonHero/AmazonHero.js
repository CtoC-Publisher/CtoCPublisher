import React from 'react';
import * as styles from './AmazonHero.module.css';

const AmazonHero = () => {
  return (
    <div className={styles.amazonHero}>
      <div className={styles.content}>
        <h2>🛒 Shop Amazon Bestsellers</h2>
        <p>Curated collection of top-rated books with direct Amazon purchase</p>
        <div className={styles.amazonBadge}>
          <span>Powered by Amazon</span>
          <span className={styles.affiliateId}>ID: ctocpublisher-20</span>
        </div>
      </div>
    </div>
  );
};

export default AmazonHero;