import React from 'react';
//core components
import Products from "./pages/product";
//redux
import store from './store/rootStore';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <Products />
  </Provider>
);

export default App;
