import Link from 'next/link'

const StorePage = () => {
  return (
    <div className='container mx-auto py-16 px-4 md:px-8'>
      {/* Phần tiêu đề và hình ảnh */}
      <div className='text-center mb-8'>
        <h1 className='text-2xl md:text-4xl font-bold mb-4 text-center'>
          CỬA HÀNG FAMI TEA
        </h1>
        <Link
          href={
            'https://order.ipos.vn/menu?pos_parent=BRAND-MNCL&pos_id=102576&source=DEFAULT'
          }
          className='bg-[#736345] text-white font-bold py-2 px-6 rounded-full hover:border hover:border-[#736345] hover:text-[#736345] hover:bg-[#d9d4cc]'>
          XEM THỰC ĐƠN
        </Link>
      </div>

      {/* Phần thông tin và bản đồ */}
      <div className='md:flex md:gap-16'>
        {/* Thông tin cửa hàng */}
        <div className='md:w-1/2'>
          <div className='space-y-4'>
            <div>
              <h2 className='text-lg font-semibold'>ĐỊA CHỈ:</h2>
              <p>238/12B Lê Văn Quới, quận Bình Tân, TP.HCM</p>
            </div>
            <div>
              <h2 className='text-lg font-semibold'>SỐ ĐIỆN THOẠI:</h2>
              <p>0936 39 07 86</p>
            </div>
            <div>
              <h2 className='text-lg font-semibold'>GIỜ MỞ CỬA:</h2>
              <p>09:00 - 22:00 hàng ngày</p>
            </div>
          </div>
        </div>

        {/* Bản đồ */}
        <div className='mt-8 md:mt-0 md:w-1/2'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.693558726747!2d106.61421201428776!3d10.83371936109144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529333b5f5f97%3A0xa69f15b6d5f7c53!2zMjM4LzEyQiBMw6ogVsSDbiBRdeG7kWksIEJpbmggVMOibiwgVGjhu6cgUXXhuq1uIDUsIFRow6BuaCBwaOG7kSBIQ00sIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1694342840924!5m2!1sen!2s'
            width='100%'
            height='300'
            allowFullScreen
            loading='lazy'
            className='rounded-lg shadow-md'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </div>
    </div>
  )
}

export default StorePage
