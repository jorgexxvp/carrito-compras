import { type ProductsRepository } from '../../domain/repositories/ProductRepository'

export class ProductUseCase {
  private readonly repo: ProductsRepository

  constructor(repo: ProductsRepository) {
    this.repo = repo
  }

  public async updateBarSocialMedia() {
    return await this.repo.ProductListHandler()
  }
}
