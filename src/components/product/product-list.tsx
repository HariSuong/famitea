'use client'

import ProductItem from '@/components/product/product-item'
import ProductOptionsDialog from '@/components/product/product-options-dialog'
import { Category, Product } from '@/types/products'
import React, { useState } from 'react'

interface ProductListProps {
  categories: Category[]
}

const ProductList: React.FC<ProductListProps> = ({ categories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <main className='lg:w-3/4 w-full md:p-10'>
      {categories.map(category => (
        <section
          key={category.id}
          id={`category-${category.id}`}
          className='mb-16'>
          <h3 className='text-2xl font-bold mb-5 pl-4 md:pl-0'>
            {category.name}
          </h3>
          <div className='grid md:grid-cols-3 grid-cols-2 md:gap-10'>
            {category.products.map(product => (
              <ProductItem
                key={product.id}
                product={product}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </section>
      ))}
      {/* Hiển thị modal khi isModalOpen là true */}
      {isModalOpen && selectedProduct && (
        <ProductOptionsDialog
          isOpen={isModalOpen} // Truyền prop để kiểm soát modal
          onClose={handleCloseModal} // Truyền hàm để đóng modal
          product={selectedProduct}
        />
      )}
    </main>
  )
}

export default ProductList
