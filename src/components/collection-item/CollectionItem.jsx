import React from 'react';
import { connect } from 'react-redux'

import CustomButton from '../custom-button/CustumButton'
import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  
  return (
    <div className='collection-item'>
      <div className='image' >
        <img className='item-image' src={imageUrl} alt="item"/>
        <img className='fav' src='/images/cart-item/heart.png' alt='fav' />
      </div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
        <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem)