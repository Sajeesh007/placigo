import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { useAuthContext } from '@/store/Context'
import { addSpace } from '@/services/space.service'

import {AiOutlineClose} from 'react-icons/ai'
import InputText from '@/modules/Form/InputText'
import CompanyLayout from '@/modules/Layout/CompanyLayout'


export default function AddNewSpaceCompany() {

    const { user } = useAuthContext()

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
        data.company = user?.id
        await addSpace({data: data, setloading: setloading, seterror: seterror, router: router, type: 'company'})
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-zinc-900 h-screen relative '>

        {/* header */}
        <div className='absolute top-3 h-12 w-screen px-3 flex justify-between items-center'>
            <AiOutlineClose className='w-8 h-8 text-white' onClick={()=> router.push('/student/space')}/>

        </div>

        {/* writing area  */}
        <div className='flex flex-col items-center space-y-4 pt-20 px-3'>
            <div className='flex space-x-2 pb-6 w-full '>
                <div className="bg-indigo-600 w-14 h-12 rounded-full text-lg font-bold text-white flex justify-center items-center ">
                    {user?.user_metadata?.name?.substring(0,2)}
                </div>
                
                 <textarea className='w-full h-96 bg-transparent text-lg text-white outline-none ' placeholder='Type something here'
                    {...register('content')}/>
            </div>

            <InputText type='text' htmlFor='link' label='Link' register={register} error={errors['link']}/>

            <button type='submit' className='flex justify-center items-center bg-indigo-600 text-white text-base font-bold w-76 rounded-2xl px-8 py-2'>
                { loading ? 'Posting...' : 'Post' }
            </button>
        </div>
    </form>
  )
}

AddNewSpaceCompany.getLayout = function getLayout(page) {
    return (
      <CompanyLayout notShowFooter={true} notShowHeader={true}>
        {page}
      </CompanyLayout>
    )
}