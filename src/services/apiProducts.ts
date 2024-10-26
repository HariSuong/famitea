// // src/services/apiProducts.js

import { StoreData } from '@/types/products'
import { apiFetchData } from '@/utils/apiUtils'

export const fetchProductsCat = async (): Promise<StoreData> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products`
  return apiFetchData<StoreData>(url)
}
