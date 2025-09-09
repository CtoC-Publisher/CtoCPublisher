import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import * as styles from './Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    const amazonUrls = cart.map(item => item.amazonUrl).join('\n');
    const message = `Check out these books on Amazon:\n\n${amazonUrls}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Book Selection',
        text: message
      });
    } else {
      navigator.clipboard.writeText(message);
      alert('Amazon links copied to clipboard!');
    }
  };

  return (
    <>
      <button 
        className={styles.cartToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        Cart ({cart.length})
      </button>
      
      {isOpen && (
        <div className={styles.cartOverlay}>
          <div className={styles.cartPanel}>
            <div className={styles.cartHeader}>
              <h3>Your Books</h3>
              <button onClick={() => setIsOpen(false)}>×</button>
            </div>
            
            <div className={styles.cartItems}>
              {cart.length === 0 ? (
                <p>No books in cart</p>
              ) : (
                cart.map(item => (
                  <div key={item.productCode} className={styles.cartItem}>
                    <img src={item.image} alt={item.name} />
                    <div className={styles.itemDetails}>
                      <h4>{item.name}</h4>
                      <p>{item.author}</p>
                      <p>${item.price}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.productCode)}
                      className={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className={styles.cartFooter}>
                <div className={styles.total}>
                  Total: ${getCartTotal().toFixed(2)}
                </div>
                <button 
                  onClick={handleCheckout}
                  className={styles.checkoutBtn}
                >
                  Get Amazon Links
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;