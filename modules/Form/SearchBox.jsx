
import { MdOutlineSearch } from 'react-icons/md';

export default function Searchbox({placeholder}){
  return(
    <div className="flex justify-center items-center relative focus-within:text-zinc-900 text-white">
      <MdOutlineSearch className='absolute inset-y-0 my-auto left-3 w-6 h-6 ' />
      <input type='text' placeholder={placeholder} className='pl-10 h-10 w-96 bg-zinc-900 rounded-full outline-none text-white 
        focus:bg-white focus:text-zinc-900 focus:border focus:border-zinc-900'/>
    </div>
  )
}
