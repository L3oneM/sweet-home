import React from 'react';
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/CollectionItem'

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-container'>
      <div className="header">
        <div className="title">
          {title}
        </div>
        <div className="items-count">
          {items.length} items found
        </div>
      </div>
      <div className="item-container">
        {
          items.map(item => 
            <CollectionItem key={item.id} item={item} />
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);