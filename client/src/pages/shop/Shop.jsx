import React, { useEffect,lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import Spinner from '../../components/spinner/Spinner'

const Directory = lazy(() => import('../../components/directory/Directory'))
const CollectionContainer = lazy(() => import('../collection/CollectionContainer'))


const Shop = ({ match, fetchCollectionsStart }) => {

  useEffect(() => {
    fetchCollectionsStart()
  },[fetchCollectionsStart])

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={Directory} />
        <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer} />
      </Suspense>
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