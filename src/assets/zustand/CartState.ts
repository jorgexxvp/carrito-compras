
import { create } from 'zustand'

import { IProductResponse } from '../../core/domain/models/Products'
interface IProductsProps extends IProductResponse {
  cantidad: number;
}


interface ICartstate {
  cart: IProductsProps[];
  setCart: (value: IProductsProps[]) => void;
}

export const useCart = create<ICartstate>((set) => ({
  cart: JSON.parse(localStorage.getItem('Cart') as string),
  setCart: (value) => set({ cart: value }),
}))
