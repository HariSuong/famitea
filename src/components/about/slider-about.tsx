'use client'

import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Image from 'next/image'

interface SliderAbout {
  id: number
  src: string
  title: string
}

export function CarouselAbout({ slider }: { slider: SliderAbout[] }) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 2000
        })
      ]}
      className='w-full mt-24'>
      <CarouselContent>
        {slider.map(imgAbout => (
          <CarouselItem key={imgAbout.id} className='basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Image
                width={300}
                height={300}
                src={imgAbout.src}
                alt={imgAbout.title}
                className='w-full rounded-md'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
