//action-types
import { ActionTypes } from "./productConstants";
import { useIndexedDB } from 'react-indexed-db';
import {products} from "./products";
const GetProducts = () => {
  const { add } = useIndexedDB('products');
  const { getAll } = useIndexedDB('products');
  const { clear } = useIndexedDB('people');
  // clear().then(
  //   () => {
  //     for (let index = 0; index < products.length; index++) {
  //       add({
  //         code: products[index].code,
  //         name: products[index].name,
  //         type: products[index].type,
  //         availability: products[index].availability,
  //         needing_repair: products[index].needing_repair,
  //         durability: products[index].durability,
  //         max_durability: products[index].max_durability,
  //         mileage: products[index].mileage,
  //         price: products[index].price,
  //         minimum_rent_period: products[index].minimum_rent_period
  //       })
  //     }
  //   }
  // ).then(
  //   async() => {
  //     console.log(products.length)
  //     let productData = await getAll().then(products => products)
  //     console.log(productData)
  //   }
  // )
  localStorage.setItem("data", JSON.stringify(products))
  let productData = localStorage.getItem("data")
  return ({
    type: ActionTypes.GET_PRODUCTS,
    payload: productData
  })
}
export const getProducts = GetProducts
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

