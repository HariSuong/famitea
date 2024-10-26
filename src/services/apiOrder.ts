import { Order } from '@/types/orders'
import { apiPostData } from '@/utils/apiPostData'

export const submitOrder = async (order: Order): Promise<void> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/invoice`
  return apiPostData<Order>(url, order)
}
