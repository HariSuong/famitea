// components/ProductCategorySidebar.tsx
// import ProductDropdownCat from '@/components/product/product-dropdown-cat'
import React from 'react'

interface Category {
  id: number
  name: string
}

interface ProductCategorySidebarProps {
  categories: Category[]
}

const ProductCategorySidebar: React.FC<ProductCategorySidebarProps> = ({
  categories
}) => {
  return (
    <>
      {/* <div className='w-full p-5 lg:hidden block'>
        <ProductDropdownCat categories={categories} />
      </div> */}
      <aside className='lg:w-1/4 bg-[#D8C3A5] p-5 lg:block hidden sticky top-0 h-screen'>
        <h2 className='text-lg font-bold'>DANH MỤC</h2>
        <ul className='space-y-3 mt-5'>
          {categories.map(category => (
            <li key={category.id} className='text-sm'>
              <a
                href={`#category-${category.id}`}
                className='hover:text-[#a17e4e] cursor-pointer'>
                {category.name.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default ProductCategorySidebar
