import React from 'react';
import AnimatedBook from '../AnimatedBook';
import Container from '../Container';
import * as styles from './BestsellersShowcase.module.css';

const BestsellersShowcase = ({ books }) => {
  const bestsellers = books.filter(book => book.tags.includes('bestseller')).slice(0, 8);

  return (
    <div className={styles.showcase}>
      <Container size={'large'}>
        <div className={styles.header}>
          <h2 className={`${styles.title} animate-fade-in-up`}>Amazon Bestsellers</h2>
          <p className={`${styles.subtitle} animate-fade-in-up animate-delay-200`}>
            Discover the most popular books on Amazon, curated for CtoC Books readers
          </p>
        </div>
        
        <div className={styles.booksGrid}>
          {bestsellers.map((book, index) => (
            <AnimatedBook
              key={book.productCode}
              book={book}
              delay={index * 100}
              animationType={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
            />
          ))}
        </div>

        <div className={styles.floatingBooks}>
          {bestsellers.slice(0, 3).map((book, index) => (
            <div 
              key={`floating-${book.productCode}`}
              className={`${styles.floatingBook} ${styles[`float${index + 1}`]}`}
            >
              <img src={book.image} alt={book.alt} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BestsellersShowcase;