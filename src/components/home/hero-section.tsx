'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function HeroSection() {
  return (
    <Carousel
      className='w-full relative'
      opts={{
        align: 'start',
        loop: true
      }}
      plugins={[
        Autoplay({ delay: 5000, stopOnInteraction: true }) // autoplay with a 3-second delay
      ]}>
      <CarouselContent>
        <CarouselItem>
          <Image
            alt='Slogan FamiTea'
            src='/img/hero-section/1.png'
            width={1440}
            height={680}
            className='w-full'
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt='Fami TEA'
            src='/img/hero-section/2.png'
            width={1440}
            height={680}
            className='w-full'
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt='Iced match latte'
            src='/img/hero-section/3.png'
            width={1440}
            height={680}
            className='w-full'
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt='Grab a cup today'
            src='/img/hero-section/4.png'
            width={1440}
            height={680}
            className='w-full'
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className='absolute left-10 hover:bg-white hover:opacity-40 hover:border-none' />
      <CarouselNext className='absolute right-10 hover:bg-white hover:opacity-40 hover:border-none' />
    </Carousel>
  )
}
