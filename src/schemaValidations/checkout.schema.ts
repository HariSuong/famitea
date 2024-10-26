import { z } from 'zod'

// Schema validation using Zod
export const checkoutSchema = z.object({
  name: z.string().min(1, { message: 'Họ và tên không được để trống' }),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: 'Số điện thoại phải có 10 chữ số.' }),
  address: z.string().min(1, {
    message: 'Vui lòng điền chính xác địa chỉ giao hàng'
  }),
  email: z.string().email({
    message: 'Email không hợp lệ'
  }),
  message: z.string()
})
