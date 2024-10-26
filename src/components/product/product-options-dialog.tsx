import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart, updateCartItem } from '@/features/cart/cartSlice'
import { CartItem, SelectedOptions } from '@/features/cart/cartTypes'
import { Product } from '@/types/products'
import { generateCartItemId } from '@/utils/cartUtils'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import ProductIceSelector from '@/components/product/product-ice-selector'
import ProductQuantitySelector from '@/components/product/product-quantity-selector'
import ProductSizeSelector from '@/components/product/product-size-selector'
import ProductSugarSelector from '@/components/product/product-sugar-selector'
import ToppingSelector from '@/components/product/topping-selector'
import { FaPenToSquare } from 'react-icons/fa6'

// Cập nhật interface ProductOptionsDialogProps
export interface ProductOptionsDialogProps {
  product: Product
  isOpen: boolean
  onClose: () => void
  cartItem?: CartItem // Nhận vào cartItem khi chỉnh sửa
}

const ProductOptionsDialog: React.FC<ProductOptionsDialogProps> = ({
  product,
  isOpen,
  onClose,
  cartItem // Nhận cartItem khi chỉnh sửa
}) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  )
  const [selectedSugar, setSelectedSugar] = useState<string | undefined>(
    undefined
  )
  const [selectedIce, setSelectedIce] = useState<string | undefined>(undefined)
  const [selectedToppings, setSelectedToppings] = useState<number[]>([])
  const [notes, setNotes] = useState<string>('') // State cho ghi chú

  const dispatch = useDispatch()

  // Load dữ liệu từ cartItem nếu đang chỉnh sửa
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity)
      setSelectedSize(cartItem.attributes.size?.name)
      setSelectedSugar(cartItem.attributes.sugar?.name)
      setSelectedIce(cartItem.attributes.ice?.name)
      setSelectedToppings(cartItem.attributes.toppings || [])
      setNotes(cartItem.attributes.notes || '')
    }
  }, [cartItem])

  const handleAddToCart = () => {
    const selectedOptions: SelectedOptions = {
      size: selectedSize
        ? product.attributes.size.find(size => size.name === selectedSize)
        : product.attributes.size[0], // Mặc định chọn size đầu tiên nếu không có chọn gì
      sugar: selectedSugar
        ? product.attributes.sugar.find(sugar => sugar.name === selectedSugar)
        : product.attributes.sugar[0], // Mặc định chọn độ ngọt đầu tiên
      ice: selectedIce
        ? product.attributes.ice.find(ice => ice.name === selectedIce)
        : product.attributes.ice[0], // Mặc định chọn đá đầu tiên
      toppings: selectedToppings.length > 0 ? selectedToppings : [], // Nếu không chọn topping thì rỗng
      notes
    }

    // Tính toán giá dựa trên thuộc tính đã chọn
    let basePrice = product.price
    if (selectedOptions.size) {
      basePrice += selectedOptions.size.price
    }
    if (selectedOptions.toppings.length > 0) {
      selectedOptions.toppings.forEach(toppingId => {
        const topping = product.attributes.toppings.find(
          t => t.id === toppingId
        )
        if (topping) basePrice += topping.price
      })
    }

    // Tính giá tổng cộng dựa trên số lượng sản phẩm
    const totalCalculatedPrice = basePrice * quantity

    const productId = product.id
    const cartItemId = generateCartItemId({
      productId,
      attributes: selectedOptions
    })

    if (cartItem) {
      dispatch(
        updateCartItem({
          id: cartItem.id,
          product,
          quantity,
          attributes: selectedOptions,
          price: totalCalculatedPrice
        })
      )
    } else {
      dispatch(
        addToCart({
          id: cartItemId,
          product,
          quantity,
          attributes: selectedOptions,
          price: totalCalculatedPrice
        })
      )
    }

    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-[#f2f2f2] max-w-[100vw] max-h-[80vh] overflow-y-auto md:max-w-[70%] md:max-h-[90vh] p-0 md:top-[50%] top-[60%]'>
        <DialogHeader>
          <DialogTitle className='md:p-4 px-4 pt-4'>
            {cartItem ? 'Chỉnh Sửa Sản Phẩm' : 'Thêm Món Mới'}
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className='sticky bg-[#f2f2f2] top-0 z-10 shadow-lg md:p-4 px-4 pb-4'>
            <div className='md:flex md:gap-2 justify-between'>
              <div className='flex items-center gap-3'>
                <Image
                  src={
                    product.thumb
                      ? product.thumb
                      : '/img/products/milk-socola.png'
                  }
                  alt={product.name}
                  width={60}
                  height={60}
                  className='w-24 h-24 object-cover mr-4'
                />
                <div>
                  <h3 className='lg:text-lg uppercase font-bold'>
                    {product.name}
                  </h3>
                  <ProductQuantitySelector
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>
              </div>
              <p className='text-xl text-[#736345] font-bold lg:text-left text-right'>
                {product.price.toLocaleString()} VND
              </p>
            </div>
          </div>
          <div className='p-4 overflow-y-auto max-h-[60vh]'>
            <ProductSizeSelector
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <ProductSugarSelector
              product={product}
              selectedSugar={selectedSugar}
              setSelectedSugar={setSelectedSugar}
            />
            <ProductIceSelector
              product={product}
              selectedIce={selectedIce}
              setSelectedIce={setSelectedIce}
            />
            {product.attributes.toppings.length > 0 && (
              <div className='mt-4 md:flex md:gap-2'>
                <h4 className='lg:text-lg text-sm underline font-semibold md:w-1/4'>
                  Topping (Tối đa {product.attributes.toppings.length})
                </h4>
                <ToppingSelector
                  selectedToppings={selectedToppings}
                  onToppingChange={setSelectedToppings}
                  toppings={product.attributes.toppings}
                />
              </div>
            )}

            <div className='mt-4 flex md:gap-2'>
              <h4 className='lg:text-lg text-sm underline font-semibold w-1/4 flex items-center gap-2'>
                <Label htmlFor={`notes`} className='md:flex items-center gap-2'>
                  <FaPenToSquare />{' '}
                  <span className='text-sm lg:text-base'>Ghi chú cho quán</span>
                </Label>
              </h4>
              <textarea
                id='notes'
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className='bg-transparent rounded p-2 w-full focus:outline-none focus:border-b focus:border-slate-900'
              />
            </div>
          </div>
          <div className='sticky bottom-0 bg-[#f2f2f2] border-t border-[#736345] py-4 z-10'>
            <div className='flex justify-center items-center rounded-sm'>
              <button onClick={handleAddToCart}>
                <p className='mt-6 md:px-12 md:py-4 px-8 py-4 rounded-3xl uppercase md:text-2xl bg-[#736345] text-white font-bold'>
                  {cartItem ? 'Cập Nhật' : 'Thêm vào giỏ hàng'} -{' '}
                  {(
                    quantity *
                    (product.price +
                      (selectedSize
                        ? product.attributes.size.find(
                            size => size.name === selectedSize
                          )?.price || 0
                        : 0) +
                      selectedToppings.reduce((acc, id) => {
                        const topping = product.attributes.toppings.find(
                          t => t.id === id
                        )
                        return acc + (topping ? topping.price : 0)
                      }, 0))
                  ).toLocaleString()}{' '}
                  VND
                </p>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductOptionsDialog
