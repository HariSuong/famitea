'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { useState, useCallback } from 'react'
import Image from 'next/image'

const BestSellersCarousel = () => {
  const slides = [
    {
      imageSrc: '/img/deals/deal-1.jpg',
      title: 'FAMI TEA MỜI BẠN',
      title2: 'ƯU ĐÃI NGẬP TRÀN',
      subtitle: 'MUA 8 TẶNG 1',
      description: 'KHI MUA TRỰC TIẾP TẠI QUÁN'
    },
    {
      imageSrc: '/img/deals/deal-2.jpg',
      title: 'FAMI TEA CHÀO HÈ',
      title2: '',
      subtitle: 'SẢNG KHOÁI TỪNG NGỤM',
      description: 'ĐÓN HÈ NGỌT NGÀO CÙNG FAMI'
    }
    // Thêm các slide khác tại đây
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)

  // Cập nhật chỉ số slide hiện tại khi slide thay đổi
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSlideChange = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  return (
    <section className='bg-[#f2f2f2]'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Image Carousel */}
        <div className='md:w-[55%]'>
          <Carousel onChange={handleSlideChange}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className='flex justify-center'>
                    <Image
                      src={slide.imageSrc}
                      alt={slide.title}
                      width={300}
                      height={400}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </CarouselItem>
              ))}{' '}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Text Content */}
        <div className='md:ms-6 md:px-12 px-2 md:mx-0 md:w-[45%] md:mb-0 mb-8'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${index === selectedIndex ? 'block' : 'hidden'}`}>
              {/* <h3 className='text-2xl font-bold mb-2'>{slide.title}</h3> */}
              <h3 className='text-2xl md:text-4xl font-bold'>
                <p className='mb-5'>{slide.title}</p>
                <p className='ml-12'>{slide.title2}</p>
              </h3>
              <h4 className='text-xl md:text-2xl font-light my-8'>
                {slide.subtitle}
              </h4>
              <p className='text-lg md:text-2xl font-light'>
                {slide.description}
              </p>
            </div>
          ))}
          {/* Indicator Dots */}
          <div className='flex justify-center mt-4'>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  selectedIndex === index ? 'bg-[#755529]' : 'bg-gray-300'
                }`}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellersCarousel
