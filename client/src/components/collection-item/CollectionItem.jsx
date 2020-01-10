import React from 'react';
import { connect } from 'react-redux'

import CustomButton from '../custom-button/CustomButton'
import { addItem } from '../../redux/cart/cart.actions'

import './collectionItem.styles.scss'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl, onSale } = item;
  
  return (
    <div className='collection-item'>
      <div className='image' >
        <img className='item-image' src={imageUrl} alt="item"/>
        {/* <img className='fav' src='/images/cart-item/heart.png' alt='fav' onClick={() => console.log('Favorite')} /> */}
      </div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <div className='price'>
          <span className= {`${onSale ? 'sale' : ''}`}>${price}
          </span>
          <span>
            {onSale ? `  $${onSale}` : null}
          </span>       
        </div>
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