import React from 'react';
import { Route } from 'react-router-dom';

import Directory from '../../components/directory/Directory'

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={Directory} />
      {/* <Route path={`${match.path}/chairs`} 
      render={(props) => <Collection {...props} />}  /> */}
    </div>
  );
};

export default Shop;