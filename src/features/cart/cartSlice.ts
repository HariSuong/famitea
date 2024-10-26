import { CartItem, CartState } from '@/features/cart/cartTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, product, quantity, attributes, price } = action.payload

      // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng (dựa trên id unique)
      const existingItem = state.items.find(item => item.id === id)

      if (existingItem) {
        // Nếu đã tồn tại, tăng số lượng

        existingItem.quantity += quantity
      } else {
        // Nếu chưa, thêm mục mới vào giỏ hàng
        state.items.push({
          id,
          product,
          quantity,
          attributes,
          price
        })
      }

      // Cập nhật `localStorage` sau khi thay đổi giỏ hàng
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      // Xóa sản phẩm khỏi giỏ hàng
      state.items = state.items.filter(item => item.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    updateCartItem: (state, action: PayloadAction<CartItem>) => {
      const updatedItem = action.payload
      const existingItemIndex = state.items.findIndex(
        item => item.id === updatedItem.id
      )
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex] = updatedItem
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    initializeCart: (state, action: PayloadAction<CartItem[]>) => {
      // Khởi tạo giỏ hàng từ dữ liệu có sẵn (ví dụ từ localStorage)
      state.items = action.payload
    },

    // Cập nhật số lượng sản phẩm và tính toán lại giá
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload
      const item = state.items.find(item => item.id === id)

      if (item) {
        // Cập nhật số lượng tối thiểu là 1
        item.quantity = Math.max(1, quantity)

        // Tính toán giá mới dựa trên thuộc tính sản phẩm
        let calculatedPrice = item.product.price

        if (item.attributes.size) {
          calculatedPrice += item.attributes.size.price
        }

        if (item.attributes.toppings.length > 0) {
          item.attributes.toppings.forEach(toppingId => {
            const topping = item.product.attributes.toppings.find(
              t => t.id === toppingId
            )
            if (topping) calculatedPrice += topping.price
          })
        }

        item.price = calculatedPrice
      }

      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    clearCart: state => {
      state.items = [] // Xóa giỏ hàng khỏi Redux store
      localStorage.removeItem('cart') // Xóa giỏ hàng khỏi localStorage
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  initializeCart,
  updateCartItem,
  updateQuantity,
  clearCart
} = cartSlice.actions
export default cartSlice.reducer
