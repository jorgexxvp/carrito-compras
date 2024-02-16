
import {
  AxiosRequestConfig, AxiosResponse
} from 'axios'

import { IProductResponse } from '../../domain/models/Products'
import { ProductsRepository } from '../../domain/repositories/ProductRepository'
import { PublicApi } from '../Api'

export class ProductApi extends PublicApi implements ProductsRepository {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }
  public ProductListHandler = async () => {
    const { data } = await this.get<AxiosResponse<IProductResponse[]>>(
      '/products'
    )
    return data.data
  }
}