'use client'


import { useQuery } from '@tanstack/react-query'

import {
  clientCategories, clientProducts
} from '../../core'


export const useGetProducts = () => {

  return useQuery({
    queryKey: ['Products'],
    queryFn: async () => {
      return await clientProducts.getProducts()
    },
    initialData: []
  })
}

export const useGeCategories = () => {

  return useQuery({
    queryKey: ['Categories'],
    queryFn: async () => {
      return await clientCategories.getCatogories()
    },
    initialData: []
  })
}