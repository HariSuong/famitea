'use client'

import LoadingComponent from '@/components/loading'
// import { sampleMenuData } from '@/components/data/product-dummy'
import ProductCategorySidebar from '@/components/product/product-category-sidebar'
import ProductList from '@/components/product/product-list'
import { useProductsCat } from '@/hooks/product/useProductsCat'

const ProductsPage = () => {
  const { data: categories, error, isPending } = useProductsCat()

  if (error) return error.message
  if (isPending) return <LoadingComponent />

  // console.log('menus', categories.menus)
  // console.log('categories', categories.categories)

  return (
    <div className='lg:flex block min-h-screen bg-[#EAE7DC] pt-14 md:pt-0'>
      {/* Sidebar */}
      <ProductCategorySidebar categories={categories.menus} />

      {/* Main Content */}
      <ProductList categories={categories.categories} />
      {/* <Cart /> */}
    </div>
  )
}

export default ProductsPage
