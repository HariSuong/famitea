import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        <Link
          href='/products'
          className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600'
          onClick={toggleMenu}>
          SẢN PHẨM
        </Link>
        <Link
          href='/about'
          className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600'
          onClick={toggleMenu}>
          GIỚI THIỆU
        </Link>
        <Link
          href='/stores'
          className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600'
          onClick={toggleMenu}>
          CỬA HÀNG
        </Link>
        <Link
          href='/contact'
          className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600'
          onClick={toggleMenu}>
          LIÊN HỆ
        </Link>
      </div>
    </div>
  )
}

export default MobileMenu
