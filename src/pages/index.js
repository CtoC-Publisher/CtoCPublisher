import * as React from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Layout from '../components/Layout/Layout';
import ProductCardGrid from '../components/ProductCardGrid';
import Title from '../components/Title';
import ParticleBackground from '../components/ParticleBackground';

import products from '../helpers/product.json';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const bestsellers = products.filter(book => book.tags?.includes('bestseller')).slice(0, 14);
  const fiction = products.filter(book => book.tags?.includes('fiction')).slice(0, 8);
  const nonFiction = products.filter(book => book.tags?.includes('non-fiction') || book.tags?.includes('self-help') || book.tags?.includes('memoir')).slice(0, 8);
  const blogData = [];

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      <ParticleBackground />
      {/* Hero Container: Show ctocbook.jpeg after navbar */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: 32 }}>
        <img src={'/ctocbooks.jpeg'} alt={'CtoC Books'} style={{ maxWidth: 180, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }} />
      </div>
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'CtoC Books - Independent Bookshop'}
        subtitle={'Curated bestsellers with Amazon direct links'}
        ctaText={'Browse Books'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <Container>
          <h2 className={styles.welcomeTitle}>
            WELCOME TO CTOC BOOKS - YOUR AMAZON AFFILIATE BOOKSHOP FOR CURATED BESTSELLERS.
            <br />
            CLICK ANY BOOK TO BUY DIRECTLY ON AMAZON WITH FAST SHIPPING
          </h2>
        </Container>
      </div>

      {/* Bestsellers Section */}
      <div className={styles.categorySection}>
        <Container>
          <Title name={'Amazon Bestsellers'} link={'/shop?category=bestseller'} textLink={'view all bestsellers'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={4}
            data={bestsellers}
          />
        </Container>
      </div>

      {/* Fiction Section */}
      <div className={styles.categorySection}>
        <Container>
          <Title name={'Fiction Favorites'} link={'/shop?category=fiction'} textLink={'browse fiction'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={4}
            data={fiction}
          />
        </Container>
      </div>

      {/* Non-Fiction Section */}
      <div className={styles.categorySection}>
        <Container>
          <Title name={'Non-Fiction Essentials'} link={'/shop?category=non-fiction'} textLink={'explore non-fiction'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={4}
            data={nonFiction}
          />
        </Container>
      </div>

      {/* Book Reviews & Recommendations Section */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Book Reviews & Recommendations'} subtitle={'Expert insights on the latest releases'} />
          {/* Placeholder for real reviews. You can fetch or add real reviews here. */}
          <div style={{ color: '#f8f9fa', fontSize: 16, marginTop: 24 }}>
            <p>“Atomic Habits is a game-changer for anyone looking to build better habits.” – Goodreads</p>
            <p>“Fourth Wing is a thrilling fantasy ride with dragons and war.” – Amazon Reviewer</p>
            <p>“Educated is a powerful memoir of resilience and transformation.” – NYT Book Review</p>
          </div>
        </Container>
      </div>

    </Layout>
  );
};

export default IndexPage;
