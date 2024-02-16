
import {
  AxiosRequestConfig, AxiosResponse
} from 'axios'

import { PublicApi } from '../Api'
import { CategoryRepository } from '../../domain/repositories/CategoryRepository'

export class CategoryApi extends PublicApi implements CategoryRepository {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }
  public CategoryListHandler = async () => {
    const { data } = await this.get<AxiosResponse<string[]>>(
      '/products/categories'
    )
    return data.data
  }
}
