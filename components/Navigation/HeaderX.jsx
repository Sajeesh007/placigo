import { useRouter } from 'next/router'

import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineArrowBack } from 'react-icons/md'
import { TbEdit } from 'react-icons/tb'

export default function HeaderX({back, close, title, edit}) {

    const router = useRouter()
    return (
        <div className="sticky w-screen h-16 flex justify-center items-center px-3">
            {back && <MdOutlineArrowBack className='w-8 h-8 text-white absolute left-3' onClick={()=>router.push(back)}/>}
            {close && <AiOutlineClose className='w-8 h-8 text-white absolute left-3' onClick={()=> router.push(close)}/>}
            { title && <h6>{title}</h6>}
            { edit && <TbEdit className='w-8 h-8 text-white absolute right-3' onClick={()=> router.push(`${router.asPath}/${edit}`)}/> }
        </div>
    )
}
