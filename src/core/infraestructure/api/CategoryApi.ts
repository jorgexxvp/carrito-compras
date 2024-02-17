
import { AxiosRequestConfig } from 'axios'

import { CategoryRepository } from '../../domain/repositories/CategoryRepository'
import { PublicApi } from '../Api'

export class CategoryApi extends PublicApi implements CategoryRepository {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }
  public CategoryListHandler = async () => {
    const { data } = await this.get<string[]>(
      '/products/categories'
    )
    return data
  }
}
