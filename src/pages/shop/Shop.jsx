import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.js'

import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/WithSpinner'

import Directory from '../../components/directory/Directory'
import Collection from '../collection/Collection'

const CollectionWithSpinner = WithSpinner(Collection)

const Shop = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const unsubscribeFromSnapshot = null

    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    })
  })

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={Directory} />
      <Route
       path={`${match.path}/:collectionId`} 
       render={props => (
         <CollectionWithSpinner isLoading={loading} {...props} />
       )} />     
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(
  null,
  mapDispatchToProps
)(Shop);