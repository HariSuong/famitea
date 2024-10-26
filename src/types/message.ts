// Kiểu dữ liệu cho form message
export interface MessageForm {
  full_name: string
  email?: string
  phone?: string
  message: string
}

export interface Subscribe {
  email: string
}
