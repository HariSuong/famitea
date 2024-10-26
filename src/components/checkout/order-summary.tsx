'use client'

import DeleteDialog from '@/components/delete-dialog'
import ProductOptionsDialog from '@/components/product/product-options-dialog'
import { initializeCart, removeFromCart } from '@/features/cart/cartSlice'
import { CartItem } from '@/features/cart/cartTypes'
import { RootState } from '@/features/store/store'
import { calculateItemPrice } from '@/utils/cartUtils'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const OrderSummary = () => {
  // Lấy dữ liệu giỏ hàng từ Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const [isDialogOpen, setDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<CartItem | null>(null) // Item đang được chỉnh sửa

  useEffect(() => {
    if (cartItems.length === 0) {
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        const items = JSON.parse(storedCart)
        dispatch(initializeCart(items))
      }
    }
  }, [cartItems, dispatch])

  const totalPrice = cartItems.reduce(
    (total, item) => total + calculateItemPrice(item),
    0
  )

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart(itemId))
  }

  const handleEditItem = (item: CartItem) => {
    console.log('item', item)
    setEditingItem(item)
    setDialogOpen(true) // Mở lại dialog để chỉnh sửa
  }

  return (
    <div className='p-4 rounded-lg'>
      <div className='space-y-8'>
        {cartItems.map(item => (
          <div key={item.id} className='flex md:gap-3 lg:gap-0 justify-between'>
            <div className='flex md:gap-3 lg:gap-0 w-4/5'>
              <div className='relative w-20'>
                <Image
                  width={80}
                  height={80}
                  src={
                    item.product.thumb
                      ? item.product.thumb
                      : '/img/products/milk-socola.png'
                  }
                  alt={item.product.name}
                  // objectFit='cover'
                  // className='mb-8 lg:w-12 lg:h-12 w-full'
                  className='w-12 h-12 object-cover rounded-md mr-4'
                />
                <span className='w-5 h-5 left-8 -top-3 absolute rounded-full text-xs bg-[#736345] text-white flex flex-col items-center justify-center'>
                  {item.quantity}
                </span>
              </div>
              {/* <div>
                <p className='font-semibold'>{item.product.name}</p>
                {item.attributes.size && (
                  <p className='text-sm font-medium uppercase'>
                    {item.attributes.size.name}
                  </p>
                )}
              </div> */}
              <div className='w-80'>
                <p className='font-semibold'>{item.product.name}</p>
                {item.attributes.size && (
                  <p className='text-sm font-medium uppercase'>
                    {item.attributes.size.name}
                  </p>
                )}
                <div className='flex gap-2'>
                  <button
                    className='text-sm text-blue-600 font-bold'
                    onClick={() => handleEditItem(item)}>
                    Chỉnh sửa
                  </button>
                  <DeleteDialog onDelete={() => handleRemoveItem(item.id)} />
                </div>
              </div>
            </div>
            <p className='w-1/5 text-right'>
              {calculateItemPrice(item).toLocaleString()} đ
            </p>
          </div>
        ))}
      </div>
      <div className='border-t mt-4 pt-4'>
        <div className='flex justify-between'>
          <p className='font-semibold'>Tạm tính:</p>
          <p>
            {totalPrice.toLocaleString()} <sup>đ</sup>
          </p>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='font-semibold'>Phí vận chuyển:</p>
          <p>Liên hệ</p>
        </div>
        <div className='flex justify-between mt-4'>
          <p className='font-bold text-lg'>Tổng cộng:</p>
          <p className='font-bold text-lg'>
            {totalPrice.toLocaleString()} <sup>đ</sup>
          </p>
        </div>
      </div>
      {/* Dialog để chỉnh sửa sản phẩm */}
      {editingItem && (
        <ProductOptionsDialog
          product={editingItem.product} // Truyền dữ liệu sản phẩm đang chỉnh sửa
          isOpen={isDialogOpen}
          onClose={() => setDialogOpen(false)}
          cartItem={editingItem} // Truyền cartItem để chỉnh sửa
        />
      )}
    </div>
  )
}

export default OrderSummary
