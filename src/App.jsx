import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProductList from './features/products/ProductsList';
import Cart from './features/cart/Cart';
import { fetchProducts } from './features/products/productSlice';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchProducts());
  }, []);

  return (
    <Provider store={store}>
      <div className="container flex gap-4 mx-auto p-4">
        <div className="w-3/4">
          <ProductList />
        </div>
        <div className="w-1/4">
          <Cart />
        </div>
      </div>
    </Provider>
  );
};

export default App;
