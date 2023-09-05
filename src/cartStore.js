import { writable } from 'svelte/store'

import { localStorageKey } from './utilities'

export const cartStore = writable(JSON.parse(localStorage.getItem(localStorageKey)))