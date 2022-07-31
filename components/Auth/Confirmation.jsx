import { AiOutlineClose } from 'react-icons/ai'
import { TiTickOutline } from 'react-icons/ti'

export default function Confirmation({type, message, redirect}) {
  return (
    <div className='flex justify-center items-end w-full h-full fixed bottom-0 mx-auto text-zinc-900'>

        <div className={`${type == 'success' ? 'bg-indigo-600' : 'bg-rose-600'}
          w-full h-72 rounded-t-3xl flex flex-col justify-center items-center py-4  space-y-4`
        }>
            <h5 className='text-center'>{message}</h5>
            <div className='flex justify-center items-center bg-zinc-900 rounded-full 
                w-28 h-28'>
                { type == 'success' ?
                  <TiTickOutline className='text-white w-16 h-16'/> :
                  <AiOutlineClose className='text-white w-16 h-16'/>
                }
            </div>
            <button className='btn-2' onClick={redirect}>
                {type == 'success' ? "Continue" : 'Try again'}
            </button>
        </div>
    </div>
  )
}
