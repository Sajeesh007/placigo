import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { addJobNotification, getJobById } from "services/job.service"

import { MdOutlineArrowBack } from "react-icons/md"

import CompanyLayout from "@/modules/Layout/CompanyLayout"
import InputText from "@/modules/Form/InputText"
import TextArea from "@/modules/Form/TextArea"


export default function AddJobNotification() {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [jobData, setjobData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
      if(router?.isReady){
        getJobById({id: router.query.jobId, setjobData: setjobData, seterror: seterror, setloading: setloading})
      }
    }, [router.isReady])

    const onSubmit = async (data) => {
        data.job = jobData?.id
        await addJobNotification({data: data, router: router, seterror: seterror, setloading: setloading})
    }


    return (
        <div className='relative min-h-screen'>

            {/* header */}
            <div className="sticky w-screen h-16 flex justify-center items-center px-3">
                <MdOutlineArrowBack className='w-8 h-8 text-white absolute left-3' onClick={()=>router.push(`/company/jobs/${router.query?.jobId}`)}/>
                <h6>{jobData?.company?.name}</h6>
            </div>

            {/* writing area  */}
            <form className='flex flex-col space-y-8 items-center pt-4' onSubmit={handleSubmit(onSubmit)}>

                <h5 className='text-white '>Add New Job Notification</h5>

                <div className='flex flex-col space-y-4 items-center'>
                    <InputText type='text' htmlFor='heading' label='Notification Title' register={register} error={errors['heading']}/>
                    <TextArea label='Description' htmlFor='content' register={register} error={errors['content']}/>
                </div>

                <button type='submit' className='flex justify-center items-center bg-indigo-600 text-white text-lg font-bold rounded-2xl px-8 py-2'>
                    { loading ? 'Adding...' : 'Add' }
                </button>
            </form>
            
           
        </div>
    )
}

AddJobNotification.getLayout = function getLayout(page) {
    return (
      <CompanyLayout notShowHeader={true} notShowFooter={true}>
        {page}
      </CompanyLayout>
    )
}