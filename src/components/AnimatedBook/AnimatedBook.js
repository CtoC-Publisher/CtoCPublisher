import React, { useEffect, useState } from 'react';
import * as styles from './AnimatedBook.module.css';

const AnimatedBook = ({ book, delay = 0, animationType = 'fadeInUp' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleBookClick = () => {
    if (book.amazonUrl) {
      window.open(book.amazonUrl, '_blank');
    }
  };

  return (
    <div 
      className={`${styles.bookContainer} ${isVisible ? styles[animationType] : ''}`}
      onClick={handleBookClick}
    >
      <div className={styles.bookCard}>
        <div className={styles.imageContainer}>
          <img 
            src={book.image} 
            alt={book.alt}
            className={styles.bookImage}
          />
          <div className={styles.overlay}>
            <span className={styles.buyButton}>Buy on Amazon</span>
          </div>
        </div>
        <div className={styles.bookInfo}>
          <h4 className={styles.bookTitle}>{book.name}</h4>
          <p className={styles.bookAuthor}>{book.vendor}</p>
          <p className={styles.bookPrice}>${book.price}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBook;