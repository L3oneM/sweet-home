import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import Directory from '../../components/directory/Directory'
import CollectionContainer from '../collection/CollectionContainer'


const Shop = ({ match, fetchCollectionsStart }) => {

  useEffect(() => {
    fetchCollectionsStart()
  },[fetchCollectionsStart])

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={Directory} />
      <Route
       path={`${match.path}/:collectionId`} 
       component={CollectionContainer} />    
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
  null,
  mapDispatchToProps
)(Shop);