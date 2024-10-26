'use client'

import Subscribe from '@/components/subscribe'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4'>
        {/* Logo và liên kết */}
        <div>
          <Link href='/'>
            <Image
              width={100}
              height={100}
              src='/img/logo/logo-footer.png'
              alt='FAMITEA Logo'
              className='mb-4'
            />
          </Link>
          <p className='mt-6'>Giờ mở cửa: 09:00 - 22:00</p>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h2 className='font-bold uppercase'>Theo dõi chúng tôi</h2>
          <ul className='space-y-4 mt-3'>
            <li>
              <Link href='/about' className='text-white hover:text-gray-400'>
                &gt; Về FamiTea
              </Link>
            </li>
            <li>
              <Link href='/stores' className='text-white hover:text-gray-400'>
                &gt; Cửa hàng
              </Link>
            </li>
          </ul>
          <div className='flex space-x-4 mt-4'>
            <Link href='https://www.facebook.com/famiteasaigon?mibextid=LQQJ4d' target="_blank">
              <Image
                src='/img/icons/facebook-icon.png'
                width={50}
                height={50}
                alt='Facebook'
              />
            </Link>
            <Link href='https://www.tiktok.com/@famitea.saigon?_t=8qkKqlxNRli&_r=1' target="_blank">
              <Image
                src='/img/icons/tiktok-icon.png'
                width={50}
                height={50}
                alt='Tiktok'
              />
            </Link>
            <Link href='https://www.instagram.com/famiteasaigon/profilecard/?igsh=Y2tmd2lsaGt4bzV1' target="_blank">
              <Image
                src='/img/icons/instagram-icon.png'
                width={50}
                height={50}
                alt='Instagram'
              />
            </Link>
          </div>
        </div>

        {/* Địa chỉ */}
        <div className='space-y-8'>
          <h2 className='font-bold uppercase'>Địa chỉ</h2>
          <Link
            href={'https://maps.app.goo.gl/U8KxaCHZvZM3wvev9'}
            target='_blank'>
            <p>238/12B Lê Văn Quới, Quận Bình Tân, TP. Hồ Chí Minh</p>
          </Link>
          <Link href='mailto:famiteasaigon@gmail.com'>
            <h2 className='font-bold uppercase mt-4'>Chăm sóc khách hàng</h2>
            <p>famiteasaigon@gmail.com</p>
          </Link>
          <h2 className='font-bold uppercase mt-4'>Hotline</h2>
          <Link href='tel:0936390786'>
            <p>0936 39 07 86</p>
          </Link>
        </div>

        {/* Đăng ký nhận tin */}
        <div>
          <h2 className='font-bold uppercase '>Nhận ưu đãi Fami Tea</h2>
          <p className='mt-4 font-light'>
            Để không bỏ lỡ những ưu đãi hấp dẫn từ Fami Tea, hãy để lại email
            cho chúng mình nhé!
          </p>

          <Subscribe />
        </div>
      </div>
    </footer>
  )
}

export default Footer
