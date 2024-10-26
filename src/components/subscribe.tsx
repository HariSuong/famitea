'use client'

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { useSubmitSubscribe } from '@/hooks/usePostMessage'
import { subscribeSchema } from '@/schemaValidations/contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrors, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const Subscribe = () => {
  const { mutate: submitMessage, error } = useSubmitSubscribe()

  const form = useForm({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = (data: z.infer<typeof subscribeSchema>) => {
    console.log('Form data:', data)

    submitMessage(data, {
      onSuccess: () => {
        form.reset() // Reset lại form

        toast.success('Lưu thành công', {
          description: 'Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất',
          position: 'top-right'
        })
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

  const handleValidationErrors = (
    errors: FieldErrors<z.infer<typeof subscribeSchema>>
  ) => {
    if (errors.email) {
      toast.error(errors.email.message, {
        // description: errors.email.message,
        position: 'top-right'
      })
    }
  }

  if (error) return <div>Có lỗi xảy ra {error.message}</div>

  return (
    <Form {...form}>
      <form
        className='relative w-full max-w-md mt-6'
        onSubmit={form.handleSubmit(onSubmit, handleValidationErrors)}>
        <div className='flex items-center'>
          <FormField
            name='email'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    placeholder='Nhập email của bạn...'
                    className='w-full px-4 py-3 pr-28 border text-sm border-gray-300 rounded-full focus:outline-none'
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <button
            className='absolute lg:right-2 md:right-16 right-20 top-1/2 transform -translate-y-1/2 bg-black text-white 
  px-7 py-2 rounded-full'>
            GỬI
          </button>
        </div>
      </form>
    </Form>
  )
}

export default Subscribe
