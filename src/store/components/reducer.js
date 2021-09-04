import { combineReducers } from 'redux';
import {productsReducer} from "./products/productsReducer";
const componentsReducer = combineReducers({
  products: productsReducer
});

export default componentsReducer;