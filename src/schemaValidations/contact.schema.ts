import { z } from 'zod'

// Schema validation using Zod
export const messageSchema = z.object({
  full_name: z.string().min(1, { message: 'Họ và tên không được để trống' }),
  email: z.string().email({
    message: 'Email không hợp lệ'
  }),

  phone: z
    .string()
    .regex(/^\d{10}$/, { message: 'Số điện thoại phải có 10 số.' }),
  message: z.string()
})

export const subscribeSchema = z.object({
  email: z.string().email({
    message: 'Email không hợp lệ'
  })
})
