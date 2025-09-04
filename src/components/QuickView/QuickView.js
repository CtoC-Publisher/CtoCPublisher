import React, { useState, useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import SizeList from '../SizeList';
import SwatchList from '../SwatchList';

import { generateMockProductData } from '../../helpers/mock';
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import * as styles from './QuickView.module.css';
import { toOptimizedImage } from '../../helpers/general';

const QuickView = (props) => {
  const { close, buttonTitle = 'Add to Bag' } = props;
  const sampleProduct = generateMockProductData(1, 'bestseller')[0] || {};

  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const [activeSwatch, setActiveSwatch] = useState(
    sampleProduct.colorOptions?.[0] || null
  );
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions?.[0] || null);

  const handleAddToBag = () => {
    close();
    showNotification();
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Select Options</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{sampleProduct.name || 'Product Name'}</span>
          <div className={styles.price}>
            <CurrencyFormatter amount={sampleProduct.price || 0}></CurrencyFormatter>
          </div>
          <div className={styles.productImageContainer}>
            <img alt={sampleProduct.alt || 'Product'} src={toOptimizedImage(sampleProduct.image || '/products/pdp1.jpeg')}></img>
          </div>
        </div>

        {sampleProduct.colorOptions && (
          <div className={styles.sectionContainer}>
            <SwatchList
              swatchList={sampleProduct.colorOptions}
              activeSwatch={activeSwatch}
              setActiveSwatch={setActiveSwatch}
            />
          </div>
        )}

        {sampleProduct.sizeOptions && (
          <div className={styles.sectionContainer}>
            <SizeList
              sizeList={sampleProduct.sizeOptions}
              activeSize={activeSize}
              setActiveSize={setActiveSize}
            />
          </div>
        )}

        <Button onClick={() => handleAddToBag()} fullWidth level={'primary'}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default QuickView;
