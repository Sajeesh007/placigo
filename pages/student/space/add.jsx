import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { addStudentPost } from 'services/student.service'
import { useAuthContext } from 'store/Context'

import {AiOutlineClose} from 'react-icons/ai'


export default function Addpost() {

    const { user } = useAuthContext()

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
        await addStudentPost({
            id: user?.id,
            content: data.content,
            setsuccess: setsuccess,
            setloading: setloading,
            seterror: seterror,
            router: router
        })
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-zinc-900 h-screen relative '>

        {/* header */}
        <div className='absolute top-4 h-12 w-screen px-3 flex justify-between items-center'>
            <AiOutlineClose className='w-8 h-8 text-white' onClick={()=> router.push('/student/space')}/>
            <button type='submit' className='flex justify-center items-center bg-indigo-600 text-white text-lg font-bold rounded-2xl px-8 py-2'>
                { loading ? 'Posting...' : 'Post' }
            </button>
        </div>

        {/* writing area  */}
        <div className='flex pt-20 px-3 h-full pb-6'>
            <div className='flex justify-center items-start h-full w-16'>
                <div className="bg-indigo-600 w-12 h-12 rounded-full text-lg font-bold text-white flex justify-center items-center ">
                    SA
                </div>
            </div>
            
            <div onSubmit={handleSubmit(onSubmit)} className='flex w-full h-full pl-3 pt-2'>
                <textarea className='w-full h-full bg-transparent text-lg text-white outline-none' placeholder='Type something here'
                    {...register('content')}/>
            </div>
        </div>
    </form>
  )
}
