import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Layout from '../components/Layout';
import ProductCardGrid from '../components/ProductCardGrid';
import Title from '../components/Title';
import { generateMockBookData } from '../helpers/mock';

const ShopPage = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const allBooks = generateMockBookData(14);

  const categories = [
    { key: 'all', label: 'All Books', count: allBooks.length },
    { key: 'bestseller', label: 'Bestsellers', count: allBooks.filter(book => book.tags?.includes('bestseller')).length },
    { key: 'fiction', label: 'Fiction', count: allBooks.filter(book => book.tags?.includes('fiction') || book.tags?.includes('romance') || book.tags?.includes('fantasy')).length },
    { key: 'non-fiction', label: 'Non-Fiction', count: allBooks.filter(book => book.tags?.includes('memoir') || book.tags?.includes('business') || book.tags?.includes('self-help') || book.tags?.includes('history')).length },
    { key: 'romance', label: 'Romance', count: allBooks.filter(book => book.tags?.includes('romance')).length },
    { key: 'mystery', label: 'Mystery & Thriller', count: allBooks.filter(book => book.tags?.includes('mystery') || book.tags?.includes('thriller')).length }
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  const pageTitle = searchQuery ? `Search results for "${searchQuery}"` : 'Browse Books';

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const searchParam = urlParams.get('search');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    
    if (searchParam) {
      const searchResults = allBooks.filter(book => 
        book.name.toLowerCase().includes(searchParam.toLowerCase()) ||
        book.author.toLowerCase().includes(searchParam.toLowerCase())
      );
      setFilteredData(searchResults);
      setActiveCategory('search');
    }
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredData(allBooks);
    } else {
      const filtered = allBooks.filter(book => {
        if (activeCategory === 'fiction') {
          return book.tags?.some(tag => ['fiction', 'romance', 'fantasy', 'sci-fi'].includes(tag));
        }
        if (activeCategory === 'non-fiction') {
          return book.tags?.some(tag => ['memoir', 'business', 'self-help', 'history', 'biography'].includes(tag));
        }
        return book.tags?.includes(activeCategory);
      });
      setFilteredData(filtered);
    }
  }, [activeCategory, allBooks]);

  const handleCategoryClick = (categoryKey) => {
    setActiveCategory(categoryKey);
    const newUrl = categoryKey === 'all' ? '/shop' : `/shop?category=${categoryKey}`;
    window.history.pushState({}, '', newUrl);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { label: 'Shop' },
              ]}
            />
          </div>
        </Container>
        
        <Container size={'large'} spacing={'min'}>
          <Title name={pageTitle} subtitle={`${filteredData.length} books available`} />
          
          {/* Category Filter Buttons */}
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category.key}
                className={`${styles.categoryButton} ${activeCategory === category.key ? styles.active : ''}`}
                onClick={() => handleCategoryClick(category.key)}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
          
          <div className={styles.productContainer}>
            <ProductCardGrid data={filteredData}></ProductCardGrid>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
