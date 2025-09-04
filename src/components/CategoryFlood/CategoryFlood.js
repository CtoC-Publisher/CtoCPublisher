import React from 'react';
import ProductCard from '../ProductCard';
import Container from '../Container';
import Title from '../Title';
import * as styles from './CategoryFlood.module.css';

const CategoryFlood = ({ books }) => {
  const categories = [
    { name: 'Fiction Bestsellers', tags: ['fiction', 'romance', 'literary'], limit: 20 },
    { name: 'Self-Help & Productivity', tags: ['self-help', 'productivity'], limit: 15 },
    { name: 'Thrillers & Mystery', tags: ['thriller', 'mystery', 'psychological'], limit: 18 },
    { name: 'Science Fiction & Fantasy', tags: ['sci-fi', 'fantasy', 'space'], limit: 16 }
  ];

  const getBooksByCategory = (tags, limit) => {
    return books
      .filter(book => book.tags && book.tags.some(tag => tags.includes(tag)))
      .slice(0, limit);
  };

  return (
    <div className={styles.root}>
      {categories.map((category, index) => {
        const categoryBooks = getBooksByCategory(category.tags, category.limit);
        
        return (
          <div key={index} className={styles.categorySection}>
            <Container size={'large'}>
              <Title name={category.name} subtitle={`${categoryBooks.length} bestselling books`} />
              <div className={styles.booksGrid}>
                {categoryBooks.map((book, bookIndex) => (
                  <ProductCard key={bookIndex} {...book} height={350} />
                ))}
              </div>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFlood;