import type { ProductListResponse } from '~/services/products/types'
import { PRODUCTS_KEYS } from '~/services/products/types'
import { useGetList } from '../request'

export const useProductList = () => {
  return useGetList<ProductListResponse>(PRODUCTS_KEYS.LIST, '/products')
}
