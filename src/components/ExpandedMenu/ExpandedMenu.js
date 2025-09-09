import { Link } from 'gatsby';
import React from 'react';

import * as styles from './ExpandedMenu.module.css';
import { toOptimizedImage } from '../../helpers/general';

const ExpandedMenu = (props) => {
  const { menu } = props;

  if (menu === null || menu === undefined) return <React.Fragment />;
  return (
    <div className={styles.root}>
      <div className={styles.linkContainers}>
        {menu?.map((item, index) => {
          return (
            <div key={index} className={styles.categoryContainer}>
              <span className={styles.categoryName}>{item.categoryLabel}</span>
              <ul>
                {item.submenu.map((link, linkIndex) => {
                  return (
                    <li key={linkIndex}>
                      <Link className={styles.menuLink} to={link.menuLink}>
                        {link.menuLabel}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <img src={toOptimizedImage('/ctocbooks.jpeg')} alt={'CtoC Books'} style={{maxWidth: '200px'}}></img>
        <img src={'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=150&fit=crop'} alt={'Books'} style={{maxWidth: '200px'}}></img>
      </div>
    </div>
  );
};

export default ExpandedMenu;
