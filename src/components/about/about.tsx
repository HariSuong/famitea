import { CarouselAbout } from '@/components/about/slider-about'
import Image from 'next/image'

const data = [
  {
    id: 1,
    src: '/img/introduces/3.png',
    title: 'Fami Tea'
  },
  {
    id: 2,
    src: '/img/introduces/4.png',
    title: 'Fami Tea'
  },
  {
    id: 3,
    src: '/img/introduces/5.png',
    title: 'Fami Tea'
  },
  {
    id: 4,
    src: '/img/introduces/6.png',
    title: 'Fami Tea'
  },
  {
    id: 5,
    src: '/img/introduces/7.png',
    title: 'Fami Tea'
  },
  {
    id: 6,
    src: '/img/introduces/8.png',
    title: 'Fami Tea'
  },
  {
    id: 7,
    src: '/img/introduces/9.png',
    title: 'Fami Tea'
  }
]

const AboutPage = () => {
  return (
    <div className='container mx-auto py-16 px-4 md:px-8'>
      <div className='mt-8 block md:flex md:gap-16 justify-between'>
        {/* Phần giới thiệu */}
        <div className='w-full md:w-2/5 xl:w-1/2'>
          <div className='mb-16 font-bold'>
            <h1 className='text-4xl'>FAMI TEA®</h1>
            <p className='mt-2 text-lg italic'>
              {'"Trà nhà làm, đậm đà yêu thương"'}
            </p>
          </div>
          <p className='w-full text-justify leading-7'>
            Trong bức tranh đa sắc của thị trường trà Việt Nam, FAMITEA tựa như
            một nét phác họa đầy tinh tế, mang đến cho người tiêu dùng không chỉ
            là những ly trà thơm ngon nhà làm, mà còn là một câu chuyện về tình
            yêu, sự sẻ chia và kết nối. FAMITEA không chỉ đơn thuần là một cái
            tên thương mại, mà mong muốn trở thành một phần của cuộc sống hàng
            ngày, nơi những khoảnh khắc vui buồn trong cuộc sống đều được tô đậm
            bằng hương vị trà đặc sắc.
          </p>
        </div>

        {/* Phần tầm nhìn và sứ mệnh */}
        <div className='mt-8 w-full md:mt-0 md:w-3/5 xl:w-1/2'>
          <div className='space-y-8'>
            <div className='bg-[#f6f1e9] p-6 rounded-xl shadow-md md:flex gap-10'>
              <div className='md:w-1/2 mb-3'>
                <h2 className='text-xl font-bold mb-2 uppercase'>Tầm Nhìn</h2>
                <p className='text-sm leading-5 text-justify xl:text-base xl:leading-relaxed'>
                  FAMITEA cam kết mang đến cho khách hàng những sản phẩm sạch,
                  an toàn, không hóa chất. Chúng mình mong muốn đưa thương hiệu
                  trà sữa và trà hoa quả an lành, tốt cho sức khỏe đến mọi nơi
                  trên toàn quốc.
                </p>
              </div>
              <div className='md:w-1/2 rounded-md'>
                <Image
                  src='/img/introduces/tam-nhin.png'
                  alt='Tầm Nhìn'
                  width={500}
                  height={500}
                  className='w-full'
                />
              </div>
            </div>

            <div className='bg-[#f6f1e9] p-6 rounded-xl shadow-md md:flex gap-10'>
              <div className='md:w-1/2 rounded-md md:block hidden'>
                <Image
                  src='/img/introduces/su-menh.png'
                  alt='Sứ mệnh'
                  width={500}
                  height={500}
                  className='w-full'
                />
              </div>{' '}
              <div className='md:w-1/2 mb-3'>
                <h2 className='text-xl font-bold mb-2 uppercase'>Sứ Mệnh</h2>
                <p className='text-sm leading-5 xl:text-base xl:leading-relaxed text-justify'>
                  Chúng mình không chỉ chú trọng đến chất lượng và hương vị sản
                  phẩm, mà còn đề cao giá trị gắn kết trong từng ly trà. FAMITEA
                  trở thành cầu nối, mang mọi người lại gần nhau hơn, chia sẻ
                  những câu chuyện, niềm vui, và những dự định tương lai.
                </p>
              </div>
              <div className='md:hidden block rounded-md'>
                <Image
                  src='/img/introduces/su-menh.png'
                  alt='Sứ mệnh'
                  width={500}
                  height={500}
                  className='w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarouselAbout slider={data} />
    </div>
  )
}

export default AboutPage
