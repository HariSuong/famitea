// import Image from 'next/image'
import { FaHeadset, FaTruckFast, FaWallet } from 'react-icons/fa6'

const SupportSection = () => {
  return (
    <section className='py-16 bg-[#d9d4cc]'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
        {/* Hỗ trợ 12/7 */}
        <div className='flex flex-col items-center'>
          {/* <Image
            src='/img/support.png' // Đường dẫn đến icon hỗ trợ
            alt='Hỗ trợ'
            width={120}
            height={120}
          /> */}
          <FaHeadset className='w-12 h-12' fill='#926614' />

          <h3 className='xl:text-xl font-bold mt-4 xl:h-auto h-6 text-base'>
            HỖ TRỢ 12/7
          </h3>
          <p className='text-gray-700 mt-2'>
            Đội ngũ FAMI TEA luôn có mặt để hỗ trợ bất cứ khi nào bạn cần.
          </p>
        </div>

        {/* Thanh toán tiện dụng */}
        <div className='flex flex-col items-center'>
          {/* <Image
            src='/img/payment.png' // Đường dẫn đến icon thanh toán
            alt='Thanh toán'
            width={120}
            height={120}
          /> */}
          <FaWallet className='w-12 h-12' fill='#926614' />

          <h3 className='xl:text-xl font-bold mt-4 xl:h-auto h-6 text-base'>
            THANH TOÁN TIỆN DỤNG
          </h3>
          <p className='text-gray-700 mt-2'>
            Chúng tôi hỗ trợ thanh toán online qua Ví điện tử tiện dụng.
          </p>
        </div>

        {/* Giao siêu tốc */}
        <div className='flex flex-col items-center'>
          {/* <Image
            src='/img/delivery.png' // Đường dẫn đến icon giao hàng
            alt='Giao hàng'
            width={120}
            height={120}
          /> */}
          <FaTruckFast className='w-12 h-12' fill='#926614' />

          <h3 className='xl:text-xl font-bold mt-4 xl:h-auto h-6 text-base'>
            GIAO SIÊU TỐC
          </h3>
          <p className='text-gray-700 mt-2'>
            Bạn sẽ vẫn cảm nhận được trọn vị món ăn khi nhận hàng.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
