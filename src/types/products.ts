// // // product.ts

// // Định nghĩa type cho từng topping
// export interface Topping {
//   id: number // ID riêng cho mỗi topping
//   name: string
//   price: number // Giá của topping
// }

// // Định nghĩa type cho kích thước sản phẩm
// export interface Size {
//   id: number // ID riêng cho mỗi size
//   size: string
//   price: number // Giá của size (giá tổng cộng khi chọn size)
// }

// // Định nghĩa type cho Đá
// export interface Ices {
//   id: number // ID riêng cho mỗi lượng đá
//   name: string
//   price: number // Giá của đá
// }

// // Định nghĩa type cho Đá
// export interface Sugars {
//   id: number // ID riêng cho mỗi lượng đá
//   name: string
//   price: number // Giá của đá
// }

// // Định nghĩa type cho thuộc tính sản phẩm
// export interface ProductAttributes {
//   sizes: Size[] // Danh sách kích thước
//   sugars: Sugars[] // Danh sách độ ngọt
//   ices: Ices[] // Danh sách đá
//   toppings: Topping[] // Danh sách topping
// }

// // Định nghĩa type cho sản phẩm
// export interface Product {
//   id: number
//   name: string
//   desc?: string
//   thumb: string
//   price: number // Giá cơ bản của sản phẩm
//   attributes: ProductAttributes // Thêm thuộc tính vào sản phẩm
// }

// // Định nghĩa type cho danh mục
// export interface Category {
//   id: string
//   name: string
//   products: Product[]
// }

// // Định nghĩa type cho dữ liệu tổng thể
// export type ProductsData = {
//   categories: Category[]
// }

// Định nghĩa cho các thuộc tính (Attributes)
export interface Attribute {
  id: number
  name: string
  price: number
}

// Định nghĩa cho các thuộc tính (ice, sugar, toppings) của sản phẩm
export interface ProductAttributes {
  size: Attribute[]
  ice: Attribute[]
  sugar: Attribute[]
  toppings: Attribute[]
}

// Định nghĩa cho Product (sản phẩm)
export interface Product {
  id: number
  name: string
  desc?: string
  stock?: number
  thumb: string
  price: number
  attributes: ProductAttributes
}

// Định nghĩa cho Category (danh mục sản phẩm)
export interface Category {
  id: number
  name: string
  products: Product[]
}

// Định nghĩa cho Menu (menu của cửa hàng)
export interface Menu {
  id: number
  name: string
}

// Định nghĩa cho dữ liệu tổng thể (bao gồm categories và menus)
export interface StoreData {
  categories: Category[]
  menus: Menu[]
}
