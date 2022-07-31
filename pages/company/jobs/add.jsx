import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import dayjs from 'dayjs'

import { addJob } from 'services/company.service'
import { useAuthContext } from 'store/Context'
import { jobTypes } from '@/constants/form.const'

import {AiOutlineClose} from 'react-icons/ai'
import InputText from '@/modules/Form/InputText'
import Select from '@/modules/Form/Select'
import TextArea from '@/modules/Form/TextArea'
import InputDate from '@/modules/Form/InputDate'


export default function AddNewJobPage() {

    const { user } = useAuthContext()

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
        data.company = user?.id
        data.last_date = dayjs(data.last_date).format('YYYY-MM-DD') 
        data.education = data.education.replace(/\s+/g, '').replace(/\n+/g,'').split(',')
        data.key_skills = data.key_skills.replace(/\s+/g, '').replace(/\n+/g,'').split(',')
        await addJob({
            data: data,
            setsuccess: setsuccess,
            setloading: setloading,
            seterror: seterror,
            router: router
        }) 
    }

  return (
    <div className='flex flex-col bg-zinc-900 min-h-screen relative pb-8'>

        {/* header */}
        <div className='absolute top-4 h-12 w-screen px-3 flex justify-between items-center'>
            <AiOutlineClose className='w-8 h-8 text-white' onClick={()=> router.push('/company/jobs')}/>
        </div>

        {/* writing area  */}
        <form className='flex flex-col space-y-8 items-center pt-20' onSubmit={handleSubmit(onSubmit)}>

            <h5 className='text-white '>Add New Job Vacancy</h5>

            <div className='flex flex-col space-y-4 items-center'>
                <InputText type='text' htmlFor='title' label='Job Title' register={register} error={errors['title']}/>
                <InputText type='text' htmlFor='location' label='Location' register={register} error={errors['location']}/>
                <Select name='type' label='Job Type' values={jobTypes} register={register}  error={errors['type']}/>
                <InputText type='number' htmlFor='salary' label='Salary/Mo'  register={register} error={errors['salary']}/>
                <InputDate htmlFor='last_date' label='Last Date' register={register} error={errors['last_date']}/>
                <TextArea label='Education details seperated by comma' htmlFor='education' register={register} error={errors['education']}/>
                <TextArea label='Key skills needed seperated by comma' htmlFor='key_skills' register={register} error={errors['key_skills']}/>
                <TextArea label='Description' htmlFor='description' register={register} error={errors['description']}/>
            </div>

            <button type='submit' className='flex justify-center items-center bg-indigo-600 text-white text-lg font-bold rounded-2xl px-8 py-2'>
                { loading ? 'Adding...' : 'Add' }
            </button>
        </form>
    </div>
  )
}

AddNewJobPage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout  notShowHeader={true} notShowFooter={true}>
        {page}
      </CompanyLayout>
    )
}