import React from 'react';

import './cart-item.styles.scss'

const CartItem = () => {
  const item = {
    "id": 766,
    "name": "Gourka",
    "imageUrl": "http://dummyimage.com/214x214.jpg/dddddd/000000",
    "price": 196,
    "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. "
  }

  const { name, imageUrl, price, description, quantity } = item

  return (
    <div className='cart-item-container'>
      <div className="cart-item-image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <div className="cart-item-info">
        <div className='remove-btn-container'>
          <div className='remove-btn'>
            &#10005;
          </div>
        </div>
        <div className='cart-item-name'>
          {name}
        </div>
        <div className="cart-item-price">
          ${price}
        </div>
        <div className='desc-and-quan-container'>
          <div className="cart-item-description">
            <p>Description</p>
            {description}
          </div>
          <div className="cart-item-quantity">QTY
            {quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;