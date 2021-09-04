import React from 'react';
//core components
import Products from "./pages/product";
//DB FRONTEND
import { DBConfig } from './DBConfig';
import { initDB } from 'react-indexed-db';
//redux
import store from './store/rootStore';
import { Provider } from 'react-redux';

initDB(DBConfig);

const App = () => (
  <Provider store={store}>
    <Products />
  </Provider>
);

export default App;
