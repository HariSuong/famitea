/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from '@/types/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductItemProps {
  product: Product
  onOpenModal: (product: Product) => void // Hàm mở modal
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onOpenModal }) => {
  return (
    <div
      key={product.id}
      className='p-4 flex flex-col gap-2 md:items-center uppercase mb-8 md:mb-0'>
      <div className='w-full relative'>
        <Image
          src={product.thumb ? product.thumb : '/img/products/milk-socola.png'}
          alt={product.name}
          width={200}
          height={200}
          objectFit='cover'
          className={`mb-8 lg:w-72 lg:h-72 md:w-32 md:h-32 w-full aspect-square ${
            (product?.stock ?? 0) === 0 && 'opacity-30'
          }`}
        />
        {(product?.stock ?? 0) === 0 && (
          <div className='absolute top-3 right-3'>
            <span className='font-medium me-4 px-4 py-2 rounded-full bg-[#b49d72] text-white'>
              Tạm hết
            </span>
          </div>
        )}
      </div>

      <h3 className='text-lg h-12 lg:h-14 md:h-10 text-ellipsis line-clamp-2 lg:text-lg md:text-sm font-semibold mb-3 md:mb-0'>
        {product.name}
      </h3>
      <p className='text-lg lg:text-lg md:text-base text-[#736345] font-bold mb-2 md:mb-0'>
        {product.price.toLocaleString('vi-VN')} VND
      </p>
      {(product?.stock ?? 0) !== 0 && (
        <Link
          href='https://order.ipos.vn/menu?pos_parent=BRAND-MNCL&pos_id=102576&source=DEFAULT'
          className='bg-[#736345] text-white font-bold py-2 px-6 hover:border hover:bg-transparent hover:border-[#736345] hover:text-[#736345]'
          target='_blank'
          // onClick={() => onOpenModal(product)} // Mở modal khi nhấp vào Đặt Ngay
        >
          ĐẶT NGAY
        </Link>
        // <Button
        //   className='bg-[#736345] text-white font-bold py-2 px-6 hover:border hover:border-[#736345] hover:text-[#736345]'
        //   onClick={() => onOpenModal(product)} // Mở modal khi nhấp vào Đặt Ngay
        // >
        //   ĐẶT NGAY
        // </Button>
      )}
    </div>
  )
}

export default ProductItem
