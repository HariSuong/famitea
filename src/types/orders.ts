import { CartItem } from '@/features/cart/cartTypes'

// Định nghĩa cho thông tin form của người mua
export interface OrderForm {
  name: string
  email: string
  phone: string
  address: string
  message: string
}

// Định nghĩa cho toàn bộ đơn hàng
export interface Order {
  cart: CartItem[]
  form: OrderForm
}
