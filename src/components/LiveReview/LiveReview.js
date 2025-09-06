import React, { useState } from 'react';
import * as styles from './LiveReview.module.css';

const LiveReview = ({ bookTitle }) => {
  const [reviews] = useState([
    { id: 1, rating: 5, text: "Amazing book! Couldn't put it down.", author: "Sarah M.", verified: true },
    { id: 2, rating: 4, text: "Great read, highly recommend.", author: "Mike R.", verified: true },
    { id: 3, rating: 5, text: "One of the best books this year!", author: "Emma L.", verified: false }
  ]);

  const [newReview, setNewReview] = useState({ rating: 5, text: '', author: '' });

  const renderStars = (rating, interactive = false, onChange = null) => (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={`${styles.star} ${star <= rating ? styles.filled : ''} ${interactive ? styles.interactive : ''}`}
          onClick={interactive ? () => onChange(star) : undefined}
        >★</span>
      ))}
    </div>
  );

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Live Reviews</h3>
        <div className={styles.summary}>
          {renderStars(Math.round(averageRating))}
          <span>{averageRating} ({reviews.length} reviews)</span>
        </div>
      </div>

      <div className={styles.reviewForm}>
        <h4>Write Review</h4>
        <div className={styles.formGroup}>
          {renderStars(newReview.rating, true, (rating) => setNewReview({...newReview, rating}))}
        </div>
        <input
          placeholder="Your name"
          value={newReview.author}
          onChange={(e) => setNewReview({...newReview, author: e.target.value})}
          className={styles.input}
        />
        <textarea
          placeholder="Your review..."
          value={newReview.text}
          onChange={(e) => setNewReview({...newReview, text: e.target.value})}
          className={styles.textarea}
        />
        <button className={styles.submitButton}>Submit Review</button>
      </div>

      <div className={styles.reviewsList}>
        {reviews.map(review => (
          <div key={review.id} className={styles.review}>
            <div className={styles.reviewHeader}>
              <strong>{review.author}</strong>
              {review.verified && <span className={styles.verified}>✓ Verified</span>}
            </div>
            {renderStars(review.rating)}
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveReview;