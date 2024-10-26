import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowLongUp } from 'react-icons/hi2'

const OrderNowSection = () => {
  return (
    <section className='py-16 bg-[#d9d4cc]'>
      <div className='container md:mx-auto'>
        {/* <h2 className='text-3xl font-bold text-center mb-8'>ORDER NOWWW!</h2> */}
        <h2 className='text-2xl md:text-4xl font-bold mb-4 text-center'>
          ORDER NOWWW!
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-20 gap-5'>
          {/* ShopeeFood */}
          <div className='relative group text-white font-bold rounded-xl transition-colors duration-300 overflow-hidden flex flex-col items-center justify-center'>
            <Image
              src='/img/order-now/shopee-food.png' // đường dẫn tới ảnh của ShopeeFood
              alt='ShopeeFood'
              width={230}
              height={300}
              className='lg:w-full lg:h-auto'
            />
            {/* <h3 className='text-xl font-bold text-center'>
              FAMITEA CÓ MẶT TRÊN SHOPEEFOOD
            </h3> */}
            <Link
              href='https://shopeefood.vn/now-food/shop/1229742'
              target='_blank'
              className='absolute inset-x-0 bottom-0 h-2/5 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-xl flex justify-center items-center lg:w-full w-3/5 lg:ml-0 ml-[20%]'>
              <div className='absolute p-1 border border-[#736345] rounded-xl top-2 right-2'>
                {/* Icon */}
                <HiOutlineArrowLongUp className='rotate-45 text-[#736345] p-1 text-3xl z-20' />
              </div>
              <div className='flex justify-center items-center space-x-4'>
                {/* Icon */}

                {/* Text */}
                <div className='text-[#736345]'>ĐẶT HÀNG NGAY!</div>
              </div>
            </Link>
          </div>

          {/* GrabFood */}
          <div className='text-white rounded-lg'>
            <div className='relative group text-white font-bold rounded-xl transition-colors duration-300 overflow-hidden flex flex-col items-center justify-center'>
              <Image
                src='/img/order-now/grab.png' // đường dẫn tới ảnh của GrabFood
                alt='GrabFood'
                width={230}
                height={300}
                className='lg:w-full lg:h-auto'
              />
              {/* Phần màu trắng sẽ hiện ra khi hover */}
              <div className='flex justify-center items-center'>
                <Link
                  target='_blank'
                  href='https://r.grab.com/g/6-20241025_112447_430250C29CF44DDC89C115DA1FBF2C17_MEXMPS-5-C6XTNJWZCNVKCA'
                  className='absolute inset-x-0 bottom-0 h-2/5 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-xl flex justify-center items-center lg:w-full w-3/5 lg:ml-0 ml-[20%]'>
                  <div className='absolute p-1 border border-[#736345] rounded-xl top-2 right-2'>
                    {/* Icon */}
                    <HiOutlineArrowLongUp className='rotate-45 text-[#736345] p-1 text-3xl z-20' />
                  </div>
                  <div className='flex justify-center items-center space-x-4'>
                    {/* Icon */}

                    {/* Text */}
                    <div className='text-[#736345]'>ĐẶT HÀNG NGAY!</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Đặt trực tiếp với FamiTea */}
          <div className='flex justify-center items-center lg:block'>
            <div className='relative group bg-[#f2f2f2] bg-[url("/img/order-now/fami.jpg")] bg-cover bg-center font-bold py-4 px-8 rounded-xl transition-colors duration-300 overflow-hidden lg:w-96 lg:h-[487px] w-[230px] h-[300px]'>
              <div className='text-center z-10 relative'>
                <p className='text-2xl'> ĐẶT TRỰC TIẾP VỚI</p>
                <h2 className='text-lg font-semibold'>FAMITEA</h2>
              </div>

              {/* Phần màu trắng sẽ hiện ra khi hover */}
              <Link
                href='https://order.ipos.vn/menu?pos_parent=BRAND-MNCL&pos_id=102576'
                target='_blank'
                className='absolute inset-x-0 bottom-0 h-2/5 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-xl flex justify-center items-center'>
                <div className='absolute p-1 border border-[#736345] rounded-xl top-2 right-2'>
                  {/* Icon */}
                  <HiOutlineArrowLongUp className='rotate-45 text-[#736345] p-1 text-3xl z-20' />
                </div>
                <div className='flex justify-center items-center space-x-4'>
                  {/* Icon */}

                  {/* Text */}
                  <div className='text-[#736345]'>ĐẶT HÀNG NGAY!</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderNowSection
