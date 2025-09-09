import React, { useContext } from 'react';
import * as styles from './ProductCard.module.css';
import { CartContext } from '../../context/CartProvider';
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
    amazonUrl,
    productCode
  } = props;
  
  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ productCode, name, author, price, image, amazonUrl });
  };

  return (
    <div className={styles.root}>
      <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
        <div className={styles.imageContainer}>
          <img src={image || '/ctocbooks.jpeg'} alt={imageAlt}></img>
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
        <button 
          onClick={handleAddToCart}
          className={styles.addToCartBtn}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
