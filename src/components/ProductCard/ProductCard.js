import React from 'react';
import * as styles from './ProductCard.module.css';

import CurrencyFormatter from '../CurrencyFormatter';

const ProductCard = (props) => {
  const {
    image,
    imageAlt,
    name,
    price,
    originalPrice,
    meta,
    author,
    amazonUrl
  } = props;

  return (
    <div className={styles.root}>
      <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
        <div className={styles.imageContainer}>
          <img src={image} alt={imageAlt}></img>
        </div>
      </a>
      <div className={styles.detailsContainer}>
        <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
          <span className={styles.productName}>{name}</span>
          <span className={styles.author}>{author}</span>
          <div className={styles.prices}>
            <span
              className={`${originalPrice !== undefined ? styles.salePrice : ''}`}>
              <CurrencyFormatter amount={price}></CurrencyFormatter>
            </span>
            {originalPrice && (
              <span className={styles.originalPrice}>
                <CurrencyFormatter amount={originalPrice}></CurrencyFormatter>
              </span>
            )}
          </div>
          <span className={styles.meta}>{meta}</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
