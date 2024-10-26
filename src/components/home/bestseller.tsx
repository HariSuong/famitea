'use client'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import Image from 'next/image'

import Link from 'next/link'

const BestSellers = () => {
  const [currentImage, setCurrentImage] = useState(
    '/img/best-seller/tra-trai-cay-tuoi.jpg'
  )
  const handleTabChange = (imageSrc: string) => {
    setCurrentImage(imageSrc)
  }

  return (
    <section className='py-16 bg-[#d9d4cc] border-t-slate-500 shadow-sm'>
      <div className='container mx-auto px-4 flex flex-col items-center justify-center md:flex-row gap-16 lg:gap-28'>
        {/* Hình ảnh */}
        <div className='w-full md:w-[40%]'>
          <Image
            src={currentImage}
            alt='Best Seller Image'
            width={200}
            height={250}
            className='w-full h-auto'
          />
        </div>

        {/* Nội dung Tab */}
        <div className='w-full md:w-[60%] lg:ml-12'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>
            FAMI TEA BEST SELLERS
          </h2>
          <Tabs
            defaultValue='fruit-tea'
            onValueChange={value => {
              switch (value) {
                case 'fruit-tea':
                  handleTabChange('/img/best-seller/tra-trai-cay-tuoi.jpg')
                  break
                case 'milk-tea':
                  handleTabChange('/img/best-seller/tra-sua-nuong.jpg')
                  break
                case 'che':
                  handleTabChange('/img/best-seller/che-sau-rieng.jpg')
                  break
              }
            }}>
            <TabsList className='mb-12 pl-0 md:flex flex'>
              <TabsTrigger
                className='data-[state=active]:shadow-none data-[state=active]:text-[#736345] data-[state=active]:underline font-bold first:pl-0'
                value='fruit-tea'>
                TRÀ TRÁI CÂY
              </TabsTrigger>
              <TabsTrigger
                className='data-[state=active]:shadow-none data-[state=active]:text-[#736345] data-[state=active]:underline font-bold'
                value='milk-tea'>
                TRÀ SỮA
              </TabsTrigger>
              <TabsTrigger
                className='data-[state=active]:shadow-none data-[state=active]:text-[#736345] data-[state=active]:underline font-bold'
                value='che'>
                CHÈ KHÔNG NGỌT
              </TabsTrigger>
            </TabsList>
            <TabsContent value='fruit-tea'>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-[#736345]'>
                TRÀ TRÁI CÂY TƯƠI
              </h3>
              <p className='text-base md:text-lg text-[#262626] mb-6'>
                TRÀ TƯƠI KẾT HỢP CÙNG VỊ NGỌT TỰ NHIÊN TỪ TRÁI CÂY TƯƠI, MANG
                ĐẾN SỰ TƯƠI MÁT. DỊU NHẸ VÀ SẢNG KHOÁI.
              </p>
              <p className='font-semibold mb-3'>M: 25.000VND — L: 30.000VND</p>
              <Link
                href={'/products'}
                className='bg-[#736345] text-white font-bold py-2 px-6 rounded-full hover:border hover:border-[#736345] hover:text-[#736345] hover:bg-[#d9d4cc]'>
                XEM THỰC ĐƠN
              </Link>
            </TabsContent>
            <TabsContent value='milk-tea'>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-[#736345]'>
                TRÀ SỮA NƯỚNG
              </h3>
              <p className='text-base md:text-lg text-[#262626] mb-6'>
                TRÀ SỮA ĐẬM ĐÀ VỚI HƯƠNG VỊ NƯỚNG ĐỘC ĐÁO, THÊM LỚP KEM BÉO
                NGẬY, TẠO NÊN TRẢI NGHIỆM THƠM NGON ĐẦY LÔI CUỐN.
              </p>
              <p className='font-semibold mb-3'>M: 30.000VND — L: 35.000VND</p>
              <Link
                href={'/products'}
                className='bg-[#736345] text-white font-bold py-2 px-6 rounded-full hover:border hover:border-[#736345] hover:text-[#736345] hover:bg-[#d9d4cc]'>
                XEM THỰC ĐƠN
              </Link>
            </TabsContent>
            <TabsContent value='che'>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-[#736345]'>
                CHÈ SẦU RIÊNG
              </h3>
              <p className='text-base md:text-lg text-[#262626] mb-6'>
                CHÈ NGỌT NGÀO, THƠM NGẬY VỚI HƯƠNG VỊ ĐẬM ĐÀ CỦA SẦU RIÊNG TƯƠI,
                KẾT HỢP HOÀN HẢO CÙNG CÁC NGUYÊN LIỆU TINH TẾ.
              </p>
              <p className='font-semibold mb-3'>37.000VND</p>
              <Link
                href={'/products'}
                className='bg-[#736345] text-white font-bold py-2 px-6 rounded-full hover:border hover:border-[#736345] hover:text-[#736345] hover:bg-[#d9d4cc]'>
                XEM THỰC ĐƠN
              </Link>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default BestSellers
