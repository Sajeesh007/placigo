import { useRouter } from 'next/router'

import { RiAddFill } from 'react-icons/ri'

export default function PostAdd() {

    const router = useRouter()

  return (
    <div className='flex justify-center items-center grdnt-indigo w-12 h-12 fixed bottom-24 right-8 rounded-full z-50' 
      onClick={()=>router.push(`${router.asPath}/add`)}>
        <RiAddFill className='w-6 h-6'/>
    </div>
  )
}
