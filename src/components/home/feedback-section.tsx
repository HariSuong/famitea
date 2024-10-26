'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FeedbackSection = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'Cường',

      text: 'Trà ở FAMITEA rất ngon, không quá ngọt và đúng hương vị tự nhiên.',
      drinkImage: '/img/feedback/kh1.jpeg'
    },
    {
      id: 2,
      name: 'Thùy La',

      text: 'Không gian ấm cúng lắm. Sữa tươi kem trứng nướng béo vừa và rất ngon!',
      drinkImage: '/img/feedback/kh2.webp'
    },
    {
      id: 3,
      name: 'Ngọc',

      text: 'Phù hợp đặt cho gia đình khi đang buồn miệng, chè ngon mà lại ít ngọt!',
      drinkImage: '/img/best-seller/che-sau-rieng.jpg'
    },
    {
      id: 4,
      name: 'Minh',

      text: 'Khoai môn kem cheese ở đây độ ngọt vừa ổn, rất hợp với khẩu vị của tôi!',
      drinkImage: '/img/feedback/kh3.webp'
    },
    {
      id: 5,
      name: 'Linh',

      text: 'Đồ uống rất ngon, tôi sẽ quay lại đây nhiều lần hơn!',
      drinkImage: '/img/feedback/kh4.webp'
    }
  ]

  const [currentFeedbackStartIndex, setCurrentFeedbackStartIndex] = useState(0)

  const handleNextFeedback = () => {
    setCurrentFeedbackStartIndex(prevIndex => {
      const nextIndex = (prevIndex + 1) % feedbacks.length
      return nextIndex
    })
  }

  const feedbacksToShow = [
    feedbacks[currentFeedbackStartIndex],
    feedbacks[(currentFeedbackStartIndex + 1) % feedbacks.length],
    feedbacks[(currentFeedbackStartIndex + 2) % feedbacks.length]
  ]

  return (
    <section className='py-16 bg-[#f2f2f2]'>
      <div className='container mx-auto'>
        <h2 className='text-2xl md:text-4xl font-bold mb-4 text-center'>
          ĐÁNH GIÁ TỪ KHÁCH HÀNG
        </h2>
        <div className='flex flex-col items-center gap-8 md:gap-10'>
          {feedbacksToShow.map((feedback, index) => (
            <div
              key={feedback.id}
              className={`w-[90%] flex md:flex-row items-center gap-2 rounded-full md:w-3/4 md:h-full bg-[#736345] relative ${
                index % 2 === 0
                  ? 'mr-auto ml-0 justify-end'
                  : 'ml-auto mr-0 justify-start'
              } md:px-8 px-4 lg:py-6 pb-2 transform transition-transform duration-300 group-odd:-translate-x-5 group-even:translate-x-5`}>
              <Image
                src='/img/feedback/quote.png'
                alt='quote'
                width={40}
                height={40}
                className='absolute top-2 left-5 lg:left-11 lg:top-1 w-7 h-7 lg:w-10 lg:h-10'
              />
              <div className='flex-1'>
                <p className='text-white text-[10px] md:text-lg md:w-full w-[65%] md:mt-4 mt-3 lg:ml-12 ml-9'>
                  {feedback.text}
                </p>
                <div className='mt-2 ml-4'>
                  {/* <Image
                    width={32}
                    height={32}
                    src={feedback.image}
                    alt={feedback.name}
                    className='rounded-full object-cover'
                  /> */}
                  <p className='text-white font-semibold lg:text-base text-sm'>
                    {feedback.name}
                  </p>
                </div>
              </div>
              <Image
                width={128}
                height={128}
                src={feedback.drinkImage}
                alt='Drink'
                className='w-20 h-20 md:w-40 md:h-40 object-cover absolute md:right-4 right-0 lg:-bottom-2 bottom-2 rounded-full'
              />
            </div>
          ))}
        </div>

        <div className='w-full flex justify-center items-center'>
          <button
            onClick={handleNextFeedback}
            className='mt-8 p-2 rounded-full bg-gray-300 hover:bg-[#594d3b] text-white'>
            <FaChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
