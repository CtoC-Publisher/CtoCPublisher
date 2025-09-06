import React from 'react';
import * as styles from './products.module.css';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCardGrid from '../components/ProductCardGrid';
import products from '../helpers/product.json';
import Title from '../components/Title';

const ProductsPage = (props) => {
  const fantasyBooks = products.filter(book => book.tags?.includes('fantasy'));
  const romanceBooks = products.filter(book => book.tags?.includes('romance'));
  const selfHelpBooks = products.filter(book => book.tags?.includes('self-help'));

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { label: 'Products' },
              ]}
            />
          </div>
        </Container>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.section}>
            <Title name={'Fantasy'} />
            <ProductCardGrid data={fantasyBooks}></ProductCardGrid>
          </div>

          <div className={styles.section}>
            <Title name={'Romance'} />
            <ProductCardGrid data={romanceBooks}></ProductCardGrid>
          </div>

          <div className={styles.section}>
            <Title name={'Self-Help'} />
            <ProductCardGrid data={selfHelpBooks}></ProductCardGrid>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ProductsPage;
