import { submitOrder } from '@/services/apiOrder'
import { Order } from '@/types/orders'
import { useMutation } from '@tanstack/react-query'

export const useSubmitOrder = () => {
  return useMutation<void, Error, Order>({
    mutationFn: submitOrder
  })
}
