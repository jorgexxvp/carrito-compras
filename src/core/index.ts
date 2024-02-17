import { API_URL } from '../toolbox/constants/Environments'
import { CategoryUseCase } from './application/Category/CategoryUseCase'
import { ProductUseCase } from './application/Product/ProductUseCase'
import { CategoryApi } from './infraestructure/api/CategoryApi'
import { ProductApi } from './infraestructure/api/ProductApi'

const categoryApi = new CategoryApi({ baseURL: API_URL })
const productApi = new ProductApi({ baseURL: API_URL })

// Services

// Client

export const clientCategories = new CategoryUseCase(categoryApi)
export const clientProducts = new ProductUseCase(productApi)
