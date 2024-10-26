import { Product } from '@/types/products'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface ProductSugarSelectorProps {
  product: Product
  selectedSugar: string | undefined
  setSelectedSugar: (sugar: string) => void
}

const ProductSugarSelector: React.FC<ProductSugarSelectorProps> = ({
  product,
  selectedSugar,
  setSelectedSugar
}) => {
  return (
    <>
      {product.attributes.sugar.length > 0 && (
        <div className='mt-4 md:flex md:gap-2'>
          <h4 className='lg:text-lg text-sm underline font-semibold md:w-1/4'>
            Độ Ngọt (Chọn 1)
          </h4>
          <RadioGroup
            value={selectedSugar}
            onValueChange={setSelectedSugar}
            className='block md:grid md:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0 md:w-3/4 w-full justify-between mt-4 md:mt-0'>
            {product.attributes.sugar.map(sugar => (
              <div
                key={sugar.id}
                className='flex justify-between md:justify-start'>
                <Label
                  htmlFor={`sugar-${sugar.id}`}
                  className='lg:text-lg text-sm flex-col gap-3 w-1/2'>
                  <p className='font-bold'>{sugar.name}</p>
                  <p>
                    {sugar.price > 0
                      ? `(+${sugar.price.toLocaleString()}đ)`
                      : '(0đ)'}
                  </p>
                </Label>
                <div className='md:w-1/2'>
                  <RadioGroupItem
                    className='w-8 h-8 flex items-center justify-center'
                    value={sugar.name}
                    id={`sugar-${sugar.id}`}
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

export default ProductSugarSelector
