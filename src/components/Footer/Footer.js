import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import Dropdown from '../Dropdown/Dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Books</h3>
              <ul className={styles.linkList}>
                <li><Link to="/shop?category=fiction" className={styles.link}>Fiction</Link></li>
                <li><Link to="/shop?category=non-fiction" className={styles.link}>Non-Fiction</Link></li>
                <li><Link to="/shop?category=bestseller" className={styles.link}>Bestsellers</Link></li>
                <li><Link to="/shop?category=romance" className={styles.link}>Romance</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Customer Service</h3>
              <ul className={styles.linkList}>
                <li><Link to="/support" className={styles.link}>Contact Us</Link></li>
                <li><Link to="/faq" className={styles.link}>FAQ</Link></li>
                <li><Link to="/how-to-use" className={styles.link}>How to Order</Link></li>
                <li><Link to="/account/orders" className={styles.link}>Track Orders</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>About</h3>
              <ul className={styles.linkList}>
                <li><Link to="/about" className={styles.link}>Our Story</Link></li>
                <li><Link to="/blog" className={styles.link}>Book Reviews</Link></li>
                <li><Link to="/account" className={styles.link}>My Account</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Newsletter</h3>
              <p className={styles.newsletterText}>
                Get 15% off your first purchase! Plus, be the first to know about sales, new product launches and exclusive offers!
              </p>
              <form className={styles.newsletterForm} onSubmit={(e) => subscribeHandler(e)}>
                <FormInputField
                  icon={'arrow'}
                  id={'newsLetterInput'}
                  value={email}
                  placeholder={'Email'}
                  handleChange={(_, e) => setEmail(e)}
                />
              </form>
              <div className={styles.socialContainer}>
                {Config.social.facebook && (
                  <div onClick={() => handleSocialClick('facebook')} className={styles.socialIconContainer}>
                    <Icon symbol={'facebook'}></Icon>
                  </div>
                )}
                {Config.social.twitter && (
                  <div onClick={() => handleSocialClick('twitter')} className={styles.socialIconContainer}>
                    <Icon symbol={'twitter'}></Icon>
                  </div>
                )}
                {Config.social.instagram && (
                  <div onClick={() => handleSocialClick('instagram')} className={styles.socialIconContainer}>
                    <Icon symbol={'instagram'}></Icon>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.contentBottom}>
            <div className={styles.settings}>
              <Dropdown
                label={'Country/Region'}
                optionList={Config.currencyList}
              />
              <Dropdown label={'Language'} optionList={Config.languageList} />
            </div>
            <div className={styles.copyrightContainer}>
              <span>
                2025 © CtoC Books. Independent Bookshop.
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
