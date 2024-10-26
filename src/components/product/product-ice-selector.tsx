import { Product } from '@/types/products'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface ProductIceSelectorProps {
  product: Product
  selectedIce: string | undefined
  setSelectedIce: (ice: string) => void
}

const ProductIceSelector: React.FC<ProductIceSelectorProps> = ({
  product,
  selectedIce,
  setSelectedIce
}) => {
  return (
    <>
      {product.attributes.ice.length > 0 && (
        <div className='mt-4 md:flex md:gap-2'>
          <h4 className='lg:text-lg text-sm underline font-semibold md:w-1/4'>
            Đá (Chọn 1)
          </h4>
          <RadioGroup
            value={selectedIce}
            onValueChange={setSelectedIce}
            className='block md:grid md:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0 md:w-3/4 w-full justify-between mt-4 md:mt-0'>
            {product.attributes.ice.map(ice => (
              <div
                key={ice.id}
                className='flex justify-between md:justify-start'>
                <Label
                  htmlFor={`ice-${ice.id}`}
                  className='lg:text-lg text-sm flex-col md:gap-3 w-1/2'>
                  <p className='font-bold'>{ice.name}</p>
                  <p>
                    {ice.price > 0
                      ? `(+${ice.price.toLocaleString()}đ)`
                      : '(0đ)'}
                  </p>
                </Label>
                <div className='md:w-1/2'>
                  <RadioGroupItem
                    className='w-8 h-8 flex items-center justify-center'
                    value={ice.name}
                    id={`ice-${ice.id}`}
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

export default ProductIceSelector
