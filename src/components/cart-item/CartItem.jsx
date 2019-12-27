import React from 'react';
import { connect } from 'react-redux'

import {
  addItem,
  clearItemFromCart,
  removeItem
} from '../../redux/cart/cart.actions'

import './cart-item.styles.scss'

const CartItem = ({ cartItem, addItem, clearItem, removeItem }) => {

  const { name, imageUrl, price, quantity, onSale } = cartItem

  return (
    <div className='cart-item-container'>
      <div className="cart-image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="info">
        <div className='remove-btn-container'>
          <div
           className='remove-btn' 
           onClick={() => clearItem(cartItem)}>
          &#10005;
          </div>
        </div>
        <div className='name' >
          {name}
        </div>
        <div className='price'>
          <span className= {`${onSale ? 'sale' : ''}`}>${price}
          </span>
          <span>
            {onSale ? `  $${onSale}` : null}
          </span>       
        </div>
        <div className="quantity">
          QTY 
          <div className='add-remove-con'>
            <div
             className='arrow' 
             onClick={()=> removeItem(cartItem)}>
              &#10094;
            </div>
            <span className='value'>
              {quantity}
            </span>
            <div
             className='arrow'
             onClick={() => addItem(cartItem)}>
              &#10095;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);