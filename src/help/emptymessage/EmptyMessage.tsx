// EmptyCartMessage.js

import React from 'react';
import './emptycartmessage.scss';
import emptyCartImage from '../../assets/emptycart.gif';
import { Link } from 'react-router-dom';

const EmptyCartMessage = () => {
  return (
    <div className="empty-cart-message">
      <img className="empty-cart-image" src={emptyCartImage} alt="Empty Cart" />
      <p>Your cart is currently empty.</p>
      <p>Why not add some items and come back later?</p>
      <Link to={'/'}>
      <button className="shop-button">Let's go shopping!</button>
      </Link>
    </div>
  );
};

export default EmptyCartMessage;
