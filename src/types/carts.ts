// Định nghĩa cho một thuộc tính cụ thể
interface CartAttributeOption {
  id: number // ID của thuộc tính
  value: string // Giá trị thuộc tính (ví dụ: 'Size M', '70% đường')
  price: number // Giá cộng thêm của thuộc tính (nếu có)
}

// Định nghĩa kiểu cho các thuộc tính của sản phẩm
export interface CartAttributes {
  size?: CartAttributeOption // Thuộc tính kích thước (không bắt buộc)
  sugar?: CartAttributeOption // Thuộc tính đường (không bắt buộc)
  ice?: CartAttributeOption // Thuộc tính đá (không bắt buộc)
  toppings?: CartAttributeOption[] // Mảng chứa các topping đã chọn
}

// Định nghĩa kiểu cho một mục trong giỏ hàng
export interface CartItem {
  id: number // ID của sản phẩm
  name: string // Tên sản phẩm
  price: number // Giá cơ bản của sản phẩm
  quantity: number // Số lượng của sản phẩm trong giỏ
  attributes: CartAttributes // Các thuộc tính đã chọn của sản phẩm
  total: number // Tổng giá trị cho sản phẩm này (bao gồm thuộc tính)
}

// Định nghĩa kiểu cho giỏ hàng với `key` là chuỗi phân biệt sản phẩm
export interface Cart {
  [key: string]: CartItem // Key là chuỗi phân biệt sản phẩm dựa trên thuộc tính
}
