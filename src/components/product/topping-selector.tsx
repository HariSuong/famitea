import { Checkbox } from '@/components/ui/checkbox'

interface ToppingSelectorProps {
  selectedToppings: number[] // Thay đổi thành số (ID)
  onToppingChange: (selected: number[]) => void
  toppings: { id: number; name: string; price: number }[] // Nhận toppings từ props
}

const ToppingSelector: React.FC<ToppingSelectorProps> = ({
  selectedToppings,
  onToppingChange,
  toppings // Nhận toppings từ props
}) => {
  const handleToppingChange = (toppingId: number) => {
    const updatedToppings = selectedToppings.includes(toppingId)
      ? selectedToppings.filter(id => id !== toppingId)
      : [...selectedToppings, toppingId]

    onToppingChange(updatedToppings)
  }

  return (
    <div className='block md:grid md:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0 md:w-3/4 w-full justify-between mt-4 md:mt-0'>
      {toppings.map(topping => (
        <div key={topping.id} className='flex justify-between md:justify-start'>
          <label
            htmlFor={`topping-${topping.id}`}
            className='lg:text-lg text-sm flex-col md:gap-3 w-1/2'>
            <p className='font-bold'>
              {' '}
              {topping.name} (+{topping.price.toLocaleString()}đ)
            </p>
          </label>
          <Checkbox
            id={`topping-${topping.id}`}
            // className='mt-1 w-8 h-8 p-4 rounded-full bg-black'
            className='flex items-center justify-center rounded-full w-8 h-8'
            checked={selectedToppings.includes(topping.id)} // Kiểm tra theo ID
            onCheckedChange={() => handleToppingChange(topping.id)} // Truyền ID
          />
        </div>
      ))}
    </div>
  )
}

export default ToppingSelector
