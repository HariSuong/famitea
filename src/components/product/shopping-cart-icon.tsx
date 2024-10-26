import { FaShoppingCart } from 'react-icons/fa'

const ShoppingCartIcon: React.FC = () => {
  return (
    <div className='fixed bottom-8 right-8 w-16 h-16 flex flex-col items-center justify-center bg-[#736345] p-4 rounded-full'>
      <button className='relative'>
        <FaShoppingCart size={40} color='#fff' />
        <span className='w-6 h-6 left-8 bottom-8 absolute rounded-full text-sm bg-red-800 text-white flex flex-col items-center justify-center'>
          1
        </span>
      </button>
    </div>
  )
}

export default ShoppingCartIcon
