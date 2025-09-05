import React from 'react';
import * as styles from './products.module.css';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockBookData } from '../helpers/mock';
import Title from '../components/Title';

const ProductsPage = (props) => {
  const fantasyBooks = generateMockBookData(6, 'fantasy');
  const romanceBooks = generateMockBookData(6, 'romance');
  const selfHelpBooks = generateMockBookData(6, 'self-help');

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
