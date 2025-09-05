import * as React from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Layout from '../components/Layout/Layout';
import ProductCardGrid from '../components/ProductCardGrid';
import Title from '../components/Title';

import { generateMockBlogData, generateMockBookData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const bestsellers = generateMockBookData(4, 'bestseller');
  const fiction = generateMockBookData(4, 'fiction');
  const nonFiction = generateMockBookData(4, 'non-fiction');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
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
        <p>
          Welcome to <span className={styles.gold}>CtoC Books</span> - your Amazon affiliate bookshop for{' '}
          <span className={styles.gold}>curated bestsellers.</span>
        </p>
        <p>
          Click any book to buy directly on Amazon with{' '}
          <span className={styles.gold}>fast shipping</span>
        </p>
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

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Book Reviews & Recommendations'} subtitle={'Expert insights on the latest releases'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

    </Layout>
  );
};

export default IndexPage;
