import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useState } from 'react'

interface DeleteDialogProps {
  onDelete: () => void // Hàm xóa được truyền từ bên ngoài
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ onDelete }) => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  const handleDelete = () => {
    onDelete() // Gọi hàm xóa từ props
    setDialogOpen(false) // Đóng dialog sau khi xóa
  }

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <AlertDialogTrigger asChild>
        <button className='text-rose-600 text-sm font-bold'>Xóa</button>
      </AlertDialogTrigger>

      <AlertDialogContent className='bg-rose-700 text-white'>
        <AlertDialogHeader>
          <AlertDialogTitle>Bạn có chắc chắn muốn xóa?</AlertDialogTitle>
          <AlertDialogDescription>
            Hành động này không thể hoàn tác. Sản phẩm sẽ bị xóa khỏi giỏ hàng
            của bạn.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setDialogOpen(false)}>
            Hủy
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Xóa</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteDialog
