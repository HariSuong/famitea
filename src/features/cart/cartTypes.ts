import { Product, ProductAttributes } from '@/types/products'

// Kiểu dữ liệu cho thuộc tính đã chọn của sản phẩm trong giỏ hàng
export interface SelectedOptions {
  size?: ProductAttributes['size'][number] // Kích thước đã chọn (nếu có)
  sugar?: ProductAttributes['sugar'][number] // Độ ngọt đã chọn (nếu có)
  ice?: ProductAttributes['ice'][number] // Đá đã chọn (nếu có)
  toppings: number[] // Danh sách ID của các topping đã chọn
  notes?: string // Thêm ghi chú vào type SelectedOptions
}

// Khởi tạo type của mục giỏ hàng
export interface CartItem {
  id: string // Key duy nhất cho sản phẩm có ID và thuộc tính đã chọn
  product: Product // Thông tin sản phẩm gốc
  quantity: number // Số lượng
  attributes: SelectedOptions // Thuộc tính đã chọn (size, đường, đá, topping)
  price: number // Tổng giá của mục giỏ hàng này
}

// Định nghĩa type cho dữ liệu giỏ hàng
export interface CartState {
  items: CartItem[] // Mảng chứa các mục giỏ hàng
}
