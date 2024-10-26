// import { useState } from 'react'

interface ProductQuantitySelectorProps {
  quantity: number
  setQuantity: (quantity: number) => void
}

const ProductQuantitySelector: React.FC<ProductQuantitySelectorProps> = ({
  quantity,
  setQuantity
}) => {
  return (
    <div className='md:mt-4 flex items-center'>
      <label className='block text-lg uppercase font-semibold mr-4'>
        Số lượng:
      </label>
      <div className='flex items-center space-x-2'>
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className='flex justify-center items-center font-bold border-2 w-5 h-5 rounded-full'>
          -
        </button>
        <span className='text-xl font-semibold'>{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className='flex justify-center items-center font-bold border-2 w-5 h-5 rounded-full'>
          +
        </button>
      </div>
    </div>
  )
}

export default ProductQuantitySelector
