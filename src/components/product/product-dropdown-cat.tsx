import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

interface Category {
  id: number
  name: string
}

interface ProductCategorySidebarProps {
  categories: Category[]
}

const ProductDropdownCat: React.FC<ProductCategorySidebarProps> = ({
  categories
}) => {
  return (
    <DropdownMenu>
      {/* <DropdownMenuTrigger className='w-full py-6 focus:outline-none fixed top-0 z-50 font-medium'> */}
      <DropdownMenuTrigger className='w-full py-6 focus:outline-none font-medium'>
        DANH MỤC
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {categories.map(category => (
          <a key={category.id} href={`#category-${category.id}`}>
            <p className='hover:text-[#dcd5cc] cursor-pointer min-w-[20rem] max-w-full py-4 pl-2 list-none z-50 overflow-hidden rounded-md border shadow-md bg-[#736345] text-white'>
              {category.name.toUpperCase()}
            </p>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProductDropdownCat
