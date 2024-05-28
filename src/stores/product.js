import { defineStore } from 'pinia'
import { fetchWrapper } from '../helpers/fetchWrapper'

export const useProductStore = defineStore('product', () => {

  const getProducts = async () => {
    try {
      const res = await fetchWrapper.get('products?isDeleted=false')
      return res
    } catch (e) {
      console.log('Error al traer productos', e);
    }
  }

  const getProductsByCategory = async (categoryId) => {
    try {
      const res = await fetchWrapper.get(`products/byCategoryId/${categoryId}?isDeleted=false`)
      return res
    } catch (e) {
      console.log('Error al traer productos por categoria', e);
    }
  }

  const getProductsByName = async (name) => {
    try {
      const res = await fetchWrapper.get(`products/byName/${name}?isDeleted=false`)
      return res
    } catch (e) {
      console.log('Error al traer productos por nombre', e);
    }
  }

  const addProduct = async (data) => {
    try {
      await fetchWrapper.post('products', data)
      return true
    } catch (e) {
      console.log('Error al crear el producto', e);
      return false
    }
  }

  return { getProducts, getProductsByCategory, getProductsByName, addProduct }
})