import { type IProductResponse } from '../models/Products'

export interface ProductsRepository {
  ProductListHandler: () => Promise<IProductResponse[]>
}
