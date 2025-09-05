import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';

import Brand from '../Brand';
import Container from '../Container';
import Icon from '../Icons/Icon';
import * as styles from './Header.module.css';

const Header = (prop) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [booksDropdown, setBooksDropdown] = useState(false);

  const bannerMessage = 'Free shipping worldwide';

  const bookCategories = {
    fiction: [
      { name: 'All Fiction', link: '/shop?category=fiction' },
      { name: 'Romance', link: '/shop?category=romance' },
      { name: 'Mystery & Thriller', link: '/shop?category=mystery' },
      { name: 'Science Fiction', link: '/shop?category=sci-fi' },
      { name: 'Fantasy', link: '/shop?category=fantasy' }
    ],
    nonfiction: [
      { name: 'All Non-Fiction', link: '/shop?category=non-fiction' },
      { name: 'Biography & Memoir', link: '/shop?category=biography' },
      { name: 'Business', link: '/shop?category=business' },
      { name: 'Self-Help', link: '/shop?category=self-help' },
      { name: 'History', link: '/shop?category=history' }
    ],
    bestsellers: [
      { name: 'All Bestsellers', link: '/shop?category=bestseller' },
      { name: 'New York Times', link: '/shop?category=nyt-bestseller' },
      { name: 'Amazon Top 100', link: '/shop?category=amazon-bestseller' }
    ]
  };

  return (
    <div className={styles.root}>
      <div className={styles.headerMessageContainer}>
        <span>{bannerMessage}</span>
      </div>
      <Container size={'large'} spacing={'min'}>
        {/* header container */}
        <div className={styles.header}>
          <div className={styles.linkContainer}>
            <nav>
              <Link to='/' className={styles.navLink}>
                Home
              </Link>
              <div 
                className={styles.dropdown}
                onMouseEnter={() => setBooksDropdown(true)}
                onMouseLeave={() => setBooksDropdown(false)}
              >
                <Link to='/shop' className={styles.navLink}>
                  Books <Icon symbol={'caret'}></Icon>
                </Link>
                {booksDropdown && (
                  <div className={styles.dropdownContent}>
                    <div className={styles.categorySection}>
                      <h4>Fiction</h4>
                      {bookCategories.fiction.map((item, index) => (
                        <Link key={index} to={item.link} className={styles.dropdownLink}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className={styles.categorySection}>
                      <h4>Non-Fiction</h4>
                      {bookCategories.nonfiction.map((item, index) => (
                        <Link key={index} to={item.link} className={styles.dropdownLink}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className={styles.categorySection}>
                      <h4>Bestsellers</h4>
                      {bookCategories.bestsellers.map((item, index) => (
                        <Link key={index} to={item.link} className={styles.dropdownLink}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link to='/blog' className={styles.navLink}>
                Reviews
              </Link>
              <Link to='/about' className={styles.navLink}>
                About
              </Link>
            </nav>
          </div>
          <div
            role={'presentation'}
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            className={styles.burgerIcon}
          >
            <Icon symbol={`${mobileMenu === true ? 'cross' : 'burger'}`}></Icon>
          </div>
          <Brand />
          <div className={styles.actionContainers}>
            <button
              aria-label="Search"
              className={`${styles.iconButton} ${styles.iconContainer}`}
              onClick={() => {
                navigate('/search');
              }}
            >
              <Icon symbol={'search'}></Icon>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
