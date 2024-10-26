import { Label } from '@/components/ui/label'
import { FaPenToSquare } from 'react-icons/fa6'

interface ProductNoteProps {
  notes: string
  setNotes: (notes: string) => void
}

const ProductNote: React.FC<ProductNoteProps> = ({ notes, setNotes }) => {
  return (
    <div className='mt-4 flex md:gap-2'>
      <h4 className='lg:text-lg text-sm underline font-semibold w-1/4 flex items-center gap-2'>
        <Label htmlFor='notes' className='md:flex items-center gap-2'>
          <FaPenToSquare />{' '}
          <span className='text-sm lg:text-base'>Ghi chú cho quán</span>
        </Label>
      </h4>

      <textarea
        id='notes'
        value={notes}
        onChange={e => setNotes(e.target.value)}
        className='bg-transparent rounded p-2 w-full focus:outline-none focus:border-b focus:border-slate-900'
      />
    </div>
  )
}

export default ProductNote
