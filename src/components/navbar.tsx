'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import MobileMenu from '@/components/mobile-menu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-white shadow-md w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Navbar cho mobile */}
        <div className='md:hidden flex justify-between items-center h-24'>
          {/* Hamburger Icon cho Mobile */}
          <div className='flex items-center'>
            <button
              type='button'
              className='md:hidden p-2 rounded-md text-gray-800 hover:text-[#md:736345] 73634sm'
              onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className='flex-grow flex justify-center'>
            <Link href='/'>
              <Image
                width={300}
                height={300}
                src='/img/logo/logo-fami.png'
                alt='FAMITEA Logo'
                className='h-full w-20 md:h-24 md:w-24'
              />
            </Link>
          </div>
        </div>

        {/* Navbar cho desktop */}
        <div className='hidden md:flex justify-between items-center py-4 h-32'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                width={300}
                height={300}
                src='/img/logo/logo-fami.png'
                alt='FAMITEA Logo'
                className='h-full w-auto lg:h-36 lg:w-36'
              />
            </Link>
          </div>
          <div>
            <div className='ml-10 flex items-baseline space-x-4 gap-8'>
              <Link
                href='/products'
                className='text-gray-800 hover:text-[#736345] md:px-3 px-1 py-2 rounded-md lg:text-2xl text-sm font-medium'>
                SẢN PHẨM
              </Link>
              <Link
                href='/about'
                className='text-gray-800 hover:text-[#736345] md:px-3 px-1 py-2 rounded-md lg:text-2xl text-sm font-medium'>
                GIỚI THIỆU
              </Link>
              <Link
                href='/stores'
                className='text-gray-800 hover:text-[#736345] md:px-3 px-1 py-2 rounded-md lg:text-2xl text-sm font-medium'>
                CỬA HÀNG
              </Link>
              <Link
                href='/contact'
                className='text-gray-800 hover:text-[#736345] md:px-3 px-1 py-2 rounded-md lg:text-2xl text-sm font-medium'>
                LIÊN HỆ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menu cho mobile */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  )
}

export default Navbar
