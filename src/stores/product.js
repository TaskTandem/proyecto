import { defineStore } from 'pinia'
import { fetchWrapper } from '../helpers/fetchWrapper'

export const useProductStore = defineStore('product', () => {

  const getProducts = async () => {
    const res = await fetchWrapper.get('products?limit=20&offset=0&isDeleted=false')
    return res
  }

  return { getProducts }
})