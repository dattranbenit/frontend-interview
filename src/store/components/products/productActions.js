//action-types
import { ActionTypes } from "./productConstants";

export const getProducts = () => ({
  type: ActionTypes.GET_PRODUCTS,
})
export const cancelProduct = () => ({
  type: ActionTypes.CANCEL_PRODUCT
})

//Booking
export const setOpenBookProduct = () => ({
  type: ActionTypes.OPEN_BOOK_PRODUCT,
})
export const setOpenBookPrice = () => ({
  type: ActionTypes.OPEN_BOOK_PRICE,
})
export const setConfirmBookPrice = () => ({
  type: ActionTypes.CONFIRM_BOOK_PRICE,
})
export const setCancelBookPrice = () => ({
  type: ActionTypes.CANCEL_BOOK_PRICE,
})

//Returning
export const setOpenReturnProduct = () => ({
  type: ActionTypes.OPEN_RETURN_PRODUCT,
})
export const setOpenReturnPrice = () => ({
  type: ActionTypes.OPEN_RETURN_PRICE,
})
export const setConfirmReturnPrice = () => ({
  type: ActionTypes.CONFIRM_RETURN_PRICE,
})

