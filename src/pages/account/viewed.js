import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import * as styles from './viewed.module.css';

import AccountLayout from '../../components/AccountLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/ProductCard';

import { isAuth } from '../../helpers/general';
import { generateMockProductData } from '../../helpers/mock';

const RecentlyViewedPage = (props) => {
  const recentlyViewed = generateMockProductData(3, 'shirt');

  useEffect(() => {
    if (typeof window !== 'undefined' && isAuth() === false) {
      navigate('/login');
    }
  }, []);

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Home' },
            { link: '/account', label: 'Account' },
            { link: '/account/viewed', label: 'Recently Viewed' },
          ]}
        />
        <div className={styles.root}>
          <h1>Recently Viewed</h1>
          <div className={styles.gridContainer}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {recentlyViewed.map((product, index) => (
                <ProductCard
                  key={index}
                  height={480}
                  price={product.price}
                  imageAlt={product.alt}
                  name={product.name}
                  image={product.image}
                  meta={product.meta}
                  originalPrice={product.originalPrice}
                  link={product.link}
                />
              ))}
            </div>
          </div>
        </div>
      </AccountLayout>
    </Layout>
  );
};

export default RecentlyViewedPage;
