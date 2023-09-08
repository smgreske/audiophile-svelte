import { writable } from 'svelte/store'

import allProducts from 'data/products.json'
import { localStorageKey } from './utilities'

const itemsInLocalStorage = JSON.parse(localStorage.getItem(localStorageKey))

const cartItemsArray = allProducts.map( (current) => {
  const quantity = (itemsInLocalStorage)
    ? itemsInLocalStorage[current.id]
    : 0
  return {id:current.id, name:current.name, price:current.price, quantity: quantity}
})

export const cartStore = writable(cartItemsArray)