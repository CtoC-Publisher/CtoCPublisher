import React from 'react';
import ProductCard from '../ProductCard';
import Container from '../Container';
import Title from '../Title';
import * as styles from './Top10Bestsellers.module.css';

const Top10Bestsellers = ({ books }) => {
  const top10 = books
    .filter(book => book.ranking && book.ranking <= 10)
    .sort((a, b) => a.ranking - b.ranking);

  return (
    <div className={styles.root}>
      <Container size={'large'}>
        <Title name={'Amazon Top 10 Bestsellers'} subtitle={'Most popular books right now'} />
        <div className={styles.grid}>
          {top10.map((book, index) => (
            <div key={index} className={styles.bookItem}>
              <div className={styles.ranking}>#{book.ranking}</div>
              <ProductCard {...book} height={400} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Top10Bestsellers;