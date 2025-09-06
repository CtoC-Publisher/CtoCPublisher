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
            <div className={styles.dropdown}>
              <Link to="/shop" className={styles.navLink}>Books</Link>
              <div className={styles.dropdownContent}>
                <Link to="/shop?category=fiction" className={styles.dropdownLink}>Fiction</Link>
                <Link to="/shop?category=non-fiction" className={styles.dropdownLink}>Non-Fiction</Link>
                <Link to="/shop?category=bestseller" className={styles.dropdownLink}>Bestsellers</Link>
                <Link to="/shop?category=romance" className={styles.dropdownLink}>Romance</Link>
                <Link to="/shop" className={styles.dropdownLink}>All Books</Link>
              </div>
            </div>
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

          {/* CTA Button */}
          <div className={styles.ctaButtons}>
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
            <div className={styles.mobileDropdown}>
              <span className={styles.mobileDropdownTitle}>Books</span>
              <div className={styles.mobileDropdownContent}>
                <Link to="/shop?category=fiction" className={styles.mobileSubLink}>Fiction</Link>
                <Link to="/shop?category=non-fiction" className={styles.mobileSubLink}>Non-Fiction</Link>
                <Link to="/shop?category=bestseller" className={styles.mobileSubLink}>Bestsellers</Link>
                <Link to="/shop?category=romance" className={styles.mobileSubLink}>Romance</Link>
              </div>
            </div>
            <Link to="/blog" className={styles.mobileLink}>Reviews</Link>
            <Link to="/about" className={styles.mobileLink}>About</Link>
            <Link to="/shop" className={styles.mobileCta}>
              Shop All Books
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;