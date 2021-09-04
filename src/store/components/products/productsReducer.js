import { ActionTypes } from "./productConstants";
import {products} from "./products";
import { useIndexedDB } from 'react-indexed-db';
import React from "react";

const initialState = {
  loading: false,
  products: [],
  //BOOKING
  openBookProduct: false,
  openBookPrice: false,
  //RETURNING
  openReturnProduct: false,
  openReturnPrice: false
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload
      }
    }
    case ActionTypes.CANCEL_PRODUCT: {
      return {
        ...state,
        openBookProduct: false,
        openBookPrice: false,
        openReturnProduct: false,
        openReturnPrice: false
      }
    }
    //BOOKING
    case ActionTypes.OPEN_BOOK_PRODUCT: {
      return {
        ...state,
        openBookProduct: !state.openBookProduct
      }
    }
    case ActionTypes.OPEN_BOOK_PRICE: {
      return {
        ...state,
        openBookPrice: !state.openBookPrice,
        openBookProduct: false
      }
    }
    case ActionTypes.CONFIRM_BOOK_PRICE: {
      return {

      }
    }
    case ActionTypes.CANCEL_BOOK_PRICE: {
      return {
        ...state,
        openBookPrice: false,
        openBookProduct: true
      }
    }

    //RETURNING
    case ActionTypes.OPEN_RETURN_PRODUCT: {
      return {
        ...state,
        openReturnProduct: !state.openReturnProduct
      }
    }
    case ActionTypes.OPEN_RETURN_PRICE: {
      return {
        ...state,
        openReturnPrice: !state.openReturnPrice,
        openReturnProduct: false
      }
    }
    case ActionTypes.CONFIRM_RETURN_PRICE: {
      return {

      }
    }
    default:
      return state;
  }
};

export const productsReducer = ProductsReducer;

