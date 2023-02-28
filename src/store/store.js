import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loadUser } from '../features/auth';
import cartReducer, { getTotal } from '../features/cart';
import productsReducer, { fetchAllProducts } from '../features/products';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(loadUser(null));
store.dispatch(fetchAllProducts());
store.dispatch(getTotal());

export default store;
