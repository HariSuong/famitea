import { Product } from '@/types/products'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface ProductSizeSelectorProps {
  product: Product
  selectedSize: string | undefined
  setSelectedSize: (size: string) => void
}

const ProductSizeSelector: React.FC<ProductSizeSelectorProps> = ({
  product,
  selectedSize,
  setSelectedSize
}) => {
  return (
    <>
      {product.attributes.size.length > 0 && (
        <div className='mt-4 md:flex md:gap-2'>
          <h4 className='lg:text-lg text-sm underline font-semibold md:w-1/4'>
            Chọn Size (Chọn 1)
          </h4>
          <RadioGroup
            value={selectedSize}
            onValueChange={setSelectedSize}
            className='block md:grid md:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0 md:w-3/4 w-full justify-between mt-4 md:mt-0'>
            {product.attributes.size.map(size => (
              <div
                key={size.id}
                className='flex justify-between md:justify-start'>
                <Label
                  htmlFor={`size-${size.id}`}
                  className='lg:text-lg text-sm flex-col md:gap-3 w-1/2'>
                  <p className='font-bold'>{size.name}</p>
                  <p>
                    {size.price > 0
                      ? `(+${size.price.toLocaleString()}đ)`
                      : '(0đ)'}
                  </p>
                </Label>
                <div className='md:w-1/2'>
                  <RadioGroupItem
                    className='w-8 h-8 flex items-center justify-center'
                    value={size.name}
                    id={`size-${size.id}`}
                  />
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
    </>
  )
}

export default ProductSizeSelector
