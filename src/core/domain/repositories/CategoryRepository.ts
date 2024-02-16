export interface CategoryRepository {
  CategoryListHandler: () => Promise<string[]>
}
