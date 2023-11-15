import { PRODUCTS_KEYS, ProductListResponse } from '~/services/products/types'
import { useGetList } from '../request'

export const useProductList = () => {
	return useGetList<ProductListResponse>(PRODUCTS_KEYS.LIST, '/products')
}
