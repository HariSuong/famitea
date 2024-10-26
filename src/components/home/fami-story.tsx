import Image from 'next/image'
import Link from 'next/link'

const FamiStory = () => {
  return (
    <section className='bg-white md:px-0 px-4 py-16 h-full lg:h-screen flex flex-col items-center justify-center'>
      {/* <h2 className='text-3xl md:text-[2rem] xl:text-5xl font-bold mb-12'> */}
      <h2 className='text-2xl md:text-5xl font-bold mb-16 text-[#736345]'>
        FAMI TEA VÀ CÂU CHUYỆN THƯƠNG HIỆU
      </h2>
      <div className='container flex flex-col md:flex-row justify-center gap-24'>
        {/* Hình ảnh */}
        <div className='md:w-1/4 lg:w-2/4 flex justify-center items-center'>
          <Image
            src='/img/about/about.png' // Thay đổi đường dẫn đến hình ảnh của bạn
            alt='Fami Tea Story'
            width={500}
            height={500}
            className='lg:w-3/4 w-full h-auto'
          />
        </div>
        {/* Nội dung */}
        <div className='md:w-3/5 lg:w-2/4 flex flex-col justify-center items-center'>
          <p className='lg:text-xl text-base leading-relaxed mb-6 text-[#736345]'>
            Cái tên <strong>FAMITEA®</strong> được ghép từ {'"Fami"'} - viết tắt
            của Family (Gia đình) và {'"Tea"'} - tượng trưng cho những ly trà
            tươi mát từ thiên nhiên. Chúng mình mong muốn tạo ra một không gian
            nơi mọi người đều cảm thấy như ở nhà, nơi tình cảm gia đình được lan
            tỏa và mỗi ly trà mang đến sự ấm áp, gần gũi.
          </p>
          <p className='text-center'>
            <Link
              href='about'
              className='bg-[#736345] text-white font-bold py-2 px-6 rounded-full hover:border hover:border-[#736345] hover:bg-[#d9d4cc] hover:text-[#736345] md:py-6 md:px-8 md:text-lg'>
              XEM THÊM
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FamiStory
