'use client'

// import LoadingComponent from '@/components/loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useSubmitMessage } from '@/hooks/usePostMessage'
import { messageSchema } from '@/schemaValidations/contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const ContactPage = () => {
  const { mutate: submitMessage, error } = useSubmitMessage()

  const form = useForm({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      full_name: '',
      phone: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = (data: z.infer<typeof messageSchema>) => {
    console.log('Form data:', data)

    submitMessage(data, {
      onSuccess: () => {
        console.log('Order submitted successfully!')

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

  if (error) return <div>Có lỗi xảy ra {error.message}</div>
  // if (isPending) return <LoadingComponent />

  return (
    <Form {...form}>
      <div className='bg-[#d9d4cc]'>
        <div className='container mx-auto py-16 px-0 md:px-8'>
          {/* Phần tiêu đề và hình ảnh */}
          <div className='text-center md:mb-8'>
            <h1 className='text-2xl md:text-5xl font-bold mb-4 text-center'>
              LIÊN HỆ
            </h1>
          </div>

          {/* Phần thông tin liên hệ */}
          <Card className='md:p-8 px-0 border-none shadow-none'>
            <CardHeader>
              <CardTitle className='md:text-3xl text-lg font-bold'>
                {'FAMI TEA - "Trà nhà làm, đậm đà yêu thương"'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='mb-2 lg:text-lg'>
                <span className='font-bold mr-4'>ĐỊA CHỈ</span> : 238/12B Lê Văn
                Quới, quận Bình Tân, TP.HCM
              </p>
              <p className='mb-2 lg:text-lg'>
                <span className='font-bold mr-4'>HOTLINE</span> : 0936 39 07 86
              </p>
              <p className='mb-8 lg:text-lg'>
                <span className='font-bold mr-4'>EMAIL</span> :
                famiteasaigon@gmail.com
              </p>

              {/* Phần form liên hệ */}
              <Card className='bg-[#f2f2f2] md:p-6 p-0 rounded-xl border-none shadow-lg'>
                <CardHeader>
                  <CardTitle className='text-3xl'>LIÊN HỆ:</CardTitle>
                </CardHeader>
                <CardContent className=''>
                  <p className='text-sm lg:text-base text-[#a69886] mb-6 italic'>
                    Vui lòng điền đầy đủ thông tin theo yêu cầu để chúng tôi có
                    thể hỗ trợ quý khách tốt nhất.
                  </p>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='space-y-4 mb-4'>
                      <FormField
                        name='full_name'
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder='Họ và tên'
                                className='border-0 border-b border-[#a69886] text-[#a69886] shadow-none rounded-none italic lg:text-lg'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder='Email'
                                className='border-0 border-b border-[#a69886] text-[#a69886] shadow-none rounded-none italic lg:text-lg'
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
                            <FormControl>
                              <Input
                                {...field}
                                placeholder='Số di động'
                                className='border-0 border-b border-[#a69886] text-[#a69886] shadow-none rounded-none italic lg:text-lg'
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
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder='Nội dung'
                                className='border-0 border-b border-[#a69886] text-[#a69886] shadow-none rounded-none italic lg:text-lg'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className='text-center'>
                      <Button className='py-2 md:px-28 px-12 rounded-full text-white bg-[#736345] hover:text-[#a69886] hover:bg-[#f2f2f2] italic shadow-none hover:border hover:border-[#a69886] mt-10 lg:text-lg'>
                        GỬI
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </Form>
  )
}

export default ContactPage
