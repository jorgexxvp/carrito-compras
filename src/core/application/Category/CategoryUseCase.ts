
import { CategoryRepository } from '../../domain/repositories/CategoryRepository'

export class CategoryUseCase {
  private repo: CategoryRepository

  constructor(repo: CategoryRepository) {
    this.repo = repo
  }
  public async getCatogories() {
    return this.repo.CategoryListHandler()
  }
}