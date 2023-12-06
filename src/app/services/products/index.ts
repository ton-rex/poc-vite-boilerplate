import {
  PRODUCTS_KEYS,
  type ProductListResponse,
} from '~/app/services/products/types'
import { useGetList } from '../request'

export const useProductList = () => {
  return useGetList<ProductListResponse>(PRODUCTS_KEYS.LIST, '/products')
}
