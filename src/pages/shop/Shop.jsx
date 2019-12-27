import React from 'react';
import { Route } from 'react-router-dom';

import Directory from '../../components/directory/Directory'
import Collection from '../collection/Collection'

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={Directory} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />     
    </div>
  );
};

export default Shop;