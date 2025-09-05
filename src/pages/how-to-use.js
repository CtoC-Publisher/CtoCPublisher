import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';

const HowToUsePage = (props) => {
  let builtRef = useRef();
  let toolsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(builtRef)} to={'#about'}>
            About CtoC Books
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(toolsRef)} to={'#categories'}>
            Book Categories
          </ThemeLink>
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content} style={{ paddingTop: '80px' }}>
            <h3>About CtoC Books</h3>
            <div id="#about" ref={builtRef}>
              <p>
                CtoC Books is an independent bookshop specializing in curated literature, bestsellers, and hidden gems. We partner with Amazon to bring you the best books with fast, reliable shipping.
              </p>
              <p>
                Our bookshop is built on modern web technology using Gatsby and Netlify, providing a fast, responsive shopping experience. All books link directly to Amazon for secure purchasing and Prime shipping benefits.
              </p>
              <p>
                We focus on three main categories: Fiction (including romance, mystery, and sci-fi), Non-Fiction (business, self-help, biography), and current bestsellers. Each book is carefully selected for quality and reader appeal.
              </p>
            </div>
            <h3>Book Categories</h3>
            <div id={'#categories'} ref={toolsRef}>
              <p>
                Our carefully curated selection spans multiple genres and categories to satisfy every reader's taste. From page-turning fiction to life-changing non-fiction, we've got something for everyone.
              </p>

              <strong>Fiction:</strong>
              <ul>
                <li>Literary Fiction</li>
                <li>Romance</li>
                <li>Mystery & Thriller</li>
                <li>Science Fiction & Fantasy</li>
              </ul>

              <strong>Non-Fiction:</strong>
              <ul>
                <li>Business & Entrepreneurship</li>
                <li>Self-Help & Personal Development</li>
                <li>Biography & Memoir</li>
                <li>History & Politics</li>
              </ul>

              <strong>Bestsellers:</strong>
              <ul>
                <li>New York Times Bestsellers</li>
                <li>Amazon Top 100</li>
                <li>Staff Recommendations</li>
                <li>Award Winners</li>
              </ul>

              <p>
                All our books are available through Amazon with fast shipping and excellent customer service. Click any book to purchase directly through Amazon's secure checkout.
              </p>

              <p>
                <Button target={true} href="/shop">
                  Browse Our Collection
                </Button>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default HowToUsePage;