import { defineStore } from 'pinia'
import { fetchWrapper } from '../helpers/fetchWrapper'

export const useCategoryStore = defineStore('category', () => {

  const getCategories = async () => {
    try {
      const res = await fetchWrapper.get('categories/tree?isDeleted=false')
      return res
    } catch (e) {
      console.log('Error al traer categorias', e);
    }
  }

  const createCategories = async (data) => {
    try {
      await fetchWrapper.post('categories', data)
      return true
    } catch (e) {
      console.log('Error al cargar categoria', e);
      return false
    }
  }

  const deleteCategory = async (categoryId) => {
    try {
      await fetchWrapper.delete(`categories/${categoryId}`)
    } catch (e) {
      console.log('Error al eliminar categoria', e);
    }
  }

  return { getCategories, createCategories, deleteCategory }
})