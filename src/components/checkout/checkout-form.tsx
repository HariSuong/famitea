'use client'

import { CheckboxForm } from '@/components/checkbox-form'
// import LoadingComponent from '@/components/loading'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { clearCart } from '@/features/cart/cartSlice'
import { useSubmitOrder } from '@/hooks/usePostOrder'
import { checkoutSchema } from '@/schemaValidations/checkout.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { z } from 'zod'

const CheckoutForm = () => {
  const dispatch = useDispatch() // Khởi tạo dispatch từ Redux
  const { mutate: submitOrder, error } = useSubmitOrder()
  const route = useRouter()

  const form = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      message: ''
    }
  })

  if (error) return <div>Có lỗi xảy ra {error.message}</div>
  // if (isPending) return <LoadingComponent />

  const onSubmit = (data: z.infer<typeof checkoutSchema>) => {
    console.log('Form data:', data)
    const orderData = {
      cart: JSON.parse(localStorage.getItem('cart') || '[]'), // Lấy dữ liệu giỏ hàng từ localStorage
      form: data // Thông tin form từ dữ liệu người dùng nhập vào
    }

    submitOrder(orderData, {
      onSuccess: () => {
        console.log('Order submitted successfully!')

        form.reset() // Reset lại form

        toast.success('Lưu thành công', {
          description:
            'Chúng tôi sẽ giao hàng đến bạn trong thời gian sớm nhất',
          position: 'top-right'
        })

        // Đợi 2 giây rồi chuyển hướng
        setTimeout(() => {
          route.push('/') // Chuyển hướng tới trang chủ
        }, 2000) // Thời gian chờ 2 giây (2000ms)

        dispatch(clearCart())
      },
      onError: error => {
        console.error('Error submitting order:', error)
        toast('Xảy ra lỗi', {
          description: 'Chúng tôi sẽ kiểm tra lại lỗi nhanh chóng',
          position: 'top-right'
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className='lg:border-r border-[#736345] md:pr-8 px-4 lg:pb-12 '
        onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          <h2 className='text-xl font-semibold'>FAMI TEA</h2>
          <p className='text-sm'>Giỏ hàng &gt; Thông tin giao hàng</p>
          <h3 className='text-lg font-medium'>Thông tin giao hàng</h3>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-4'>
          <FormField
            name='name'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Họ và tên'
                    className='bg-[#f2f2f2] text-[#736345] font-extralight italic text-sm py-8 border-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='grid grid-cols-2 gap-4'>
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Email'
                      className='bg-[#f2f2f2] text-[#736345] font-extralight italic text-sm py-8 border-none'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='phone'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Số điện thoại'
                      className='bg-[#f2f2f2] text-[#736345] font-extralight italic text-sm py-8 border-none'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name='address'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Địa chỉ</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Địa chỉ'
                    className='bg-[#f2f2f2] text-[#736345] font-extralight italic text-sm py-8 border-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name='message'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lời nhắn</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Lời nhắn'
                    className='bg-[#f2f2f2] text-[#736345] font-extralight italic text-sm py-8 border-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mt-6'>
          <h3 className='font-semibold'>Phương thức thanh toán</h3>
          <CheckboxForm />
        </div>

        <div className='flex items-center justify-between'>
          <Link className='mb-4 w-1/3' href={'/products'}>
            <p>Quay lại sản phẩm</p>
          </Link>{' '}
          <button className='mt-6 w-2/3 py-3 bg-[#736345] text-white font-bold rounded-3xl'>
            Hoàn tất đơn hàng
          </button>
        </div>
      </form>
    </Form>
  )
}

export default CheckoutForm
