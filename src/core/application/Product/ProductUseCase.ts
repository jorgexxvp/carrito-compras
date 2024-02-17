import { type ProductsRepository } from '../../domain/repositories/ProductRepository'

export class ProductUseCase {
  private readonly repo: ProductsRepository

  constructor(repo: ProductsRepository) {
    this.repo = repo
  }

  public async getProducts() {
    return await this.repo.ProductListHandler()
  }
}
