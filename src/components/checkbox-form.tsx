'use client'

import { CheckboxCheckout } from '@/components/checkout/checkbox-checkout'

export function CheckboxForm() {
  return (
    <div className='bg-[#f2f2f2] flex items-center py-4 px-2 space-x-2 my-4'>
      <CheckboxCheckout defaultChecked id='cod' />
      <label
        htmlFor='cod'
        className='text-sm text-[#736345] font-extralight italic peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        {/* Accept terms and conditions */}
        Thanh toán khi giao hàng (COD)
      </label>
    </div>
  )
}
