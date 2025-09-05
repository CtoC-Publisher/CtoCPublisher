import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import Brand from '../Brand';
import Container from '../Container';
import Icon from '../Icons/Icon';
import * as styles from './Header.module.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className={styles.root}>
      <Container size={'large'}>
        <div className={styles.header}>
          {/* Brand */}
          <div className={styles.brandSection}>
            <Brand />
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/shop" className={styles.navLink}>Books</Link>
            <Link to="/blog" className={styles.navLink}>Reviews</Link>
            <Link to="/about" className={styles.navLink}>About</Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <Icon symbol="search" />
            </button>
          </form>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <Link to="/shop?category=bestseller" className={styles.ctaButton}>
              Bestsellers
            </Link>
            <Link to="/shop" className={styles.ctaPrimary}>
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <Icon symbol={mobileMenu ? 'cross' : 'burger'} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className={styles.mobileMenu}>
            <Link to="/" className={styles.mobileLink}>Home</Link>
            <Link to="/shop" className={styles.mobileLink}>Books</Link>
            <Link to="/blog" className={styles.mobileLink}>Reviews</Link>
            <Link to="/about" className={styles.mobileLink}>About</Link>
            <Link to="/shop?category=bestseller" className={styles.mobileCta}>
              View Bestsellers
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;