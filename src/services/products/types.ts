export interface Product {
  id: string
}
export type ProductListResponse = Array<Product>

export enum PRODUCTS_KEYS {
  LIST = 'LIST',
}
