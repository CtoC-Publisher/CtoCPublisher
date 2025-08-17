import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`CtoC Publisher \n Independent publishing since 2020`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Our Story
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Mission
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#community'}
          >
            Community
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded in 2020, CtoC Publisher is an independent publishing house with a
              passion for bringing extraordinary stories to readers worldwide.
            </p>
            <br />
            <br />
            <p>
              We publish a carefully curated collection of fiction, non-fiction,
              and specialty titles. Our mission is to foster literary excellence
              and champion both established and emerging authors.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Mission</h3>
            <div ref={valuesRef}>
              <p>
                CtoC Publisher believes in the transformative power of literature.
                We carefully select each manuscript for publication, focusing on
                quality storytelling, diverse voices, and works that challenge
                and inspire. From potential bestsellers to hidden literary gems,
                we're dedicated to bringing exceptional books to market and
                supporting our authors throughout their publishing journey.
              </p>
              <ol>
                <li>Champion diverse voices and stories</li>
                <li>Support local and emerging authors</li>
                <li>Foster community through literature</li>
              </ol>
              <img alt={'publishing house'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>Community</h3>
            <div id={'#community'} ref={sustainabilityRef}>
              <p>
                Our founder believed that books have the power to build bridges
                and create understanding. CtoC Publisher continues this vision by
                supporting author development, literary events, and publishing
                initiatives. We partner with literary agents, writing workshops, and
                educational institutions to discover and nurture emerging talent.
              </p>
              <p>
                As an independent publisher, CtoC serves as more than just a
                publishing house - we're advocates for our authors, champions of
                quality literature, and supporters of the broader literary ecosystem.
              </p>
              <p>
                With our commitment to editorial excellence and author support,
                CtoC Publisher is recognized as a trusted name in independent
                publishing.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
