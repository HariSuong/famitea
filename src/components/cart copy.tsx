'use client'

import DeleteDialog from '@/components/delete-dialog'
import ProductOptionsDialog from '@/components/product/product-options-dialog'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  initializeCart,
  removeFromCart,
  updateQuantity
} from '@/features/cart/cartSlice'
import { CartItem } from '@/features/cart/cartTypes'
import { RootState } from '@/features/store/store'
import { calculateItemPrice, getAttributesDescription } from '@/utils/cartUtils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Cart: React.FC = () => {
  // State for controlling product dialog visibility
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<CartItem | null>(null)

  // Khởi tạo state cho giỏ hàng
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  // Lấy dữ liệu giỏ hàng từ localStorage khi component được mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      const items: CartItem[] = JSON.parse(storedCart)
      dispatch(initializeCart(items)) // Khởi tạo giỏ hàng trong Redux
    }
  }, [dispatch])

  // Xử lý xoá sản phẩm khỏi giỏ hàng
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id)) // Xoá sản phẩm khỏi giỏ hàng qua Redux
  }

  // Xử lý thay đổi số lượng sản phẩm
  const handleChangeQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  // Function to handle the click on "Sửa" and open the product options dialog
  const handleEditItem = (item: CartItem) => {
    setEditingItem(item) // Set the item to edit

    setIsProductDialogOpen(true) // Open product options dialog
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className='fixed md:bottom-8 bottom-24 right-8 w-16 h-16 flex flex-col items-center justify-center bg-[#736345] p-4 rounded-full'>
            <button className='relative'>
              <FaShoppingCart size={40} color='#fff' />
              <span className='w-6 h-6 left-8 bottom-8 absolute rounded-full text-sm bg-red-800 text-white flex flex-col items-center justify-center'>
                {cartItems.length}
              </span>
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className='bg-[#f2f2f2] w-3/4 max-w-full max-h-[90vh] overflow-y-auto'>
          <DialogHeader>
            <DialogTitle>Giỏ Hàng</DialogTitle>
          </DialogHeader>
          {cartItems.length === 0 && (
            <div>Giỏ hàng đang trống, hãy chọn sản phẩm bạn yêu thích nhé!</div>
          )}

          {cartItems.length > 0 && (
            <div className='p-4'>
              {cartItems.map((item, index) => {
                const itemPrice = calculateItemPrice(item) // Sử dụng hàm calculateItemPrice
                const isLastItem = index === cartItems.length - 1 // Kiểm tra nếu đây là sản phẩm cuối cùng

                return (
                  <div key={item.id} className='md:flex items-center mb-4'>
                    <Image
                      src={
                        item.product.thumb
                          ? item.product.thumb
                          : '/img/products/milk-socola.png'
                      } // Đảm bảo sử dụng đúng thuộc tính thumb từ product
                      alt={item.product.name}
                      width={60}
                      height={60}
                      className='rounded mr-4'
                    />
                    <div
                      className={`md:flex-1 gap-3 pb-4 ${
                        !isLastItem ? 'border-b border-[#736345] pb-4' : '' // Chỉ áp dụng border cho các sản phẩm không phải là cuối cùng
                      }`}>
                      <h4 className='uppercase font-semibold mr-4 mb-2'>
                        {item.product.name}
                      </h4>
                      <p className='uppercase font-semibold mr-4 mb-2'>
                        SIZE:{' '}
                        {item.attributes.size
                          ? item.attributes.size.name
                          : 'Mặc định'}
                      </p>
                      <p className='uppercase font-semibold mr-4 flex items-center gap-2 mb-2'>
                        SỐ LƯỢNG:
                        <div className='flex items-center space-x-2'>
                          <button
                            onClick={() =>
                              handleChangeQuantity(item.id, item.quantity - 1)
                            }
                            className='flex justify-center items-center font-bold border-2 w-5 h-5 rounded-full'>
                            -
                          </button>{' '}
                          <span className='text-xl font-semibold'>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleChangeQuantity(item.id, item.quantity + 1)
                            }
                            className='flex justify-center items-center font-bold border-2 w-5 h-5 rounded-full'>
                            +
                          </button>
                        </div>
                      </p>
                      <p>
                        <span className='uppercase font-semibold mr-4 mb-2'>
                          GHI CHÚ:
                        </span>
                        <span className='text-sm'>
                          {getAttributesDescription(
                            item.attributes,
                            item.product
                          )}
                        </span>
                      </p>{' '}
                      {/* Hiển thị chi tiết */}
                    </div>
                    <div className='text-right'>
                      {/* <p className='font-bold'>{item.price.toLocaleString()} VND</p> */}
                      {/* Hiển thị chi tiết */}
                      <p className='text-xl text-[#736345] font-bold'>
                        {' '}
                        {itemPrice.toLocaleString()} đ
                      </p>{' '}
                      <button
                        onClick={() => handleEditItem(item)}
                        className='text-[#736345] text-sm font-bold mr-4'>
                        Sửa
                      </button>
                      {/* Hiển thị giá từng sản phẩm */}
                      {/* Nút xóa */}
                      <DeleteDialog
                        onDelete={() => handleRemoveItem(item.id)}
                      />
                    </div>
                  </div>
                )
              })}
              <div className='border-t mt-4 pt-4'>
                <p className='font-bold'>
                  Tổng cộng: ({cartItems.length} món){' '}
                  {cartItems
                    .reduce((total, item) => {
                      // Tính toán giá trị sản phẩm dựa trên thuộc tính
                      let itemTotalPrice = item.product.price

                      // Cộng giá trị của size
                      if (item.attributes.size) {
                        itemTotalPrice += item.attributes.size.price
                      }

                      // Cộng giá trị của toppings
                      if (item.attributes.toppings.length > 0) {
                        item.attributes.toppings.forEach(toppingId => {
                          const topping = item.product.attributes.toppings.find(
                            t => t.id === toppingId
                          )
                          if (topping) itemTotalPrice += topping.price
                        })
                      }

                      // Tính tổng cho số lượng sản phẩm
                      return total + itemTotalPrice * item.quantity
                    }, 0)
                    .toLocaleString()}{' '}
                  VND
                </p>
                <Link href='/checkout'>
                  {' '}
                  <button className='mt-4 w-full py-3 bg-[#736345] text-white rounded-3xl font-bold'>
                    Thanh Toán
                  </button>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {/* ProductOptionsDialog for editing items */}
      {editingItem && (
        <ProductOptionsDialog
          product={editingItem.product}
          isOpen={isProductDialogOpen}
          onClose={() => setIsProductDialogOpen(false)}
          cartItem={editingItem}
        />
      )}
    </>
  )
}

export default Cart
