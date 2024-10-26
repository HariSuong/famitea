import { CartItem, SelectedOptions } from '@/features/cart/cartTypes'
import { Product } from '@/types/products'

interface GenerateCartItemIdProps {
  productId: number // ID của sản phẩm
  attributes: SelectedOptions // Thuộc tính đã chọn của sản phẩm
}

export function generateCartItemId({
  productId,
  attributes
}: GenerateCartItemIdProps): string {
  const { size, sugar, ice, toppings } = attributes

  // Xử lý size
  const sizePart = size ? `${size.id}_${size.name}` : ''

  // Xử lý sugar
  const sugarPart = sugar ? `${sugar.id}_${sugar.name}` : ''

  // Xử lý ice
  const icePart = ice ? `${ice.id}_${ice.name}` : ''

  // Xử lý toppings (nếu có)
  const toppingsPart =
    toppings.length > 0
      ? toppings
          .map((toppingId: number) => {
            // Mỗi topping có ID và tên value (sử dụng giá trị từ toppingId)
            return `topping_${toppingId}`
          })
          .join('_')
      : ''

  // Kết hợp tất cả các phần lại để tạo thành key hoàn chỉnh
  const attributeKey = [sizePart, sugarPart, icePart, toppingsPart]
    .filter(part => part !== '') // Loại bỏ các phần rỗng
    .join('_')

  // Tạo key với định dạng productId||attributeKey
  return `${productId}||${attributeKey}`
}

// Hàm tạo thông tin GHI CHÚ cho từng sản phẩm
export const getAttributesDescription = (
  attributes: SelectedOptions,
  product: Product
) => {
  const { size, sugar, ice, toppings, notes } = attributes

  // Mô tả chi tiết các thuộc tính đã chọn
  let description = ` ${size ? size.name : 'Mặc định'}, `
  description += ` ${sugar ? `${sugar.name} ,` : ''} `
  description += ` ${ice ? `${ice.name} ,` : ''} `

  // Nếu có topping, nối tất cả các topping thành chuỗi
  if (toppings.length > 0) {
    const toppingNames = toppings
      .map(toppingId => {
        const topping = product.attributes.toppings.find(
          t => t.id === toppingId
        )
        return topping?.name ?? `Topping ${toppingId}`
      })
      .join(', ')
    description += `Topping: ${toppingNames},`
  }

  // Thêm phần ghi chú nếu có
  description += ` ${notes ? `Ghi chú riêng: ${notes}` : ''}`

  // Xóa dấu phẩy cuối cùng nếu có
  return description.trim().replace(/,\s*$/, '')
}

// Hàm tính toán giá chi tiết từng sản phẩm dựa trên các thuộc tính
export const calculateItemPrice = (item: CartItem) => {
  let itemPrice = item.product.price // Giá gốc sản phẩm

  // Cộng thêm giá của size nếu có
  if (item.attributes.size) {
    itemPrice += item.attributes.size.price
  }

  // Cộng thêm giá của toppings nếu có
  if (item.attributes.toppings.length > 0) {
    item.attributes.toppings.forEach(toppingId => {
      const topping = item.product.attributes.toppings.find(
        t => t.id === toppingId
      )
      if (topping) itemPrice += topping.price
    })
  }

  // Nhân thêm với số lượng
  return itemPrice * item.quantity // Nhân với số lượng sản phẩm hiện có
}
