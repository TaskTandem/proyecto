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

  const getProductById = async (productId) => {
    try {
      const res = await fetchWrapper.get(`products/${productId}`)
      return res
    } catch (e) {
      console.log('Error al traer los datos para editarlos', e);
      return false
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

  const editProduct = async (productId, data) => {
    try {
      await fetchWrapper.put(`products/${productId}`, data)
      return true
    } catch (e) {
      console.log('Error al editar un producto', e);
      return false
    }
  }

  const deleteProduct = async (productId) => {
    try {
      await fetchWrapper.delete(`products/${productId}`)
      return true
    } catch (e) {
      console.log('Error al eliminar el producto', e);
      return false
    }
  }

  return { getProducts, getProductById, getProductsByCategory, getProductsByName, editProduct, addProduct, deleteProduct }
})