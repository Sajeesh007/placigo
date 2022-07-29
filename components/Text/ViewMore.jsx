import { MdArrowForwardIos } from 'react-icons/md'

export default function ViewMore({onClick}) {
  return (
    <div className='flex space-x-px items-center text-zinc-500' onClick={onClick}>
        <p className='text-sm font-semibold'>View More</p>
        <MdArrowForwardIos className='w-4 h-4'/>
    </div>
  )
}
