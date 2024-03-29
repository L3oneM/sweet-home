import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import shopReducer from './shop/shop.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  cart: cartReducer,
  directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)