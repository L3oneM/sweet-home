import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

import Directory from '../../components/directory/Directory'
import CollectionContainer from '../collection/CollectionContainer'


const Shop = ({ match, fetchCollectionsStartAsync }) => {

  useEffect(() => {
    fetchCollectionsStartAsync()
  },[fetchCollectionsStartAsync])

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
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(
  null,
  mapDispatchToProps
)(Shop);