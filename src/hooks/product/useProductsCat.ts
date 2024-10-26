import { fetchProductsCat } from '@/services/apiProducts'
import { StoreData } from '@/types/products'

import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useProductsCat = (): UseQueryResult<StoreData, Error> => {
  return useQuery<StoreData, Error>({
    queryKey: ['products'],
    queryFn: fetchProductsCat
  })
}
