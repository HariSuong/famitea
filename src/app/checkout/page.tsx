import CheckoutForm from '@/components/checkout/checkout-form'
import OrderSummary from '@/components/checkout/order-summary'
import React from 'react'

const Checkout = () => {
  return (
    <div className='bg-[#d9d4cc]'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 pt-8'>
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  )
}

export default Checkout
