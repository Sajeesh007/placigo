import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { getJobAppliedById, getJobById, getJobNotifications } from "services/job.service"

import { MdOutlineArrowBack } from "react-icons/md"
import { TbEdit } from "react-icons/tb"

import CompanyLayout from "@/modules/Layout/CompanyLayout"
import Skelton from "@/components/Skelton/Skelton"


export default function JobNotifications() {

    const router = useRouter()

    const [jobData, setjobData] = useState(null)
    const [notifications, setnotifications] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
      if(router?.isReady){
        getJobById({id: router.query.jobId, setjobData: setjobData, seterror: seterror, setloading: setloading})
        getJobNotifications({setnotifications: setnotifications, jobId: router.query?.jobId, seterror: seterror, setloading: setloading})
      }
    }, [router.isReady])


    return (
        <div className='relative min-h-screen'>

            {/* header */}
            <div className="sticky w-screen h-16 flex justify-center items-center px-3">
                <MdOutlineArrowBack className='w-8 h-8 text-white absolute left-3' onClick={()=>router.push(`/company/jobs/`+ router.query?.jobId)}/>
                <h6>{jobData?.company?.name}</h6>
            </div>

            <div className="flex flex-col space-y-4 items-center pt-4 w-full px-4">
                <h5>Recent Notifications</h5>
                { loading ?
                    <Skelton height='h-24' size={[1,2,3,4,5]}/> :
                    notifications?.map((item)=>
                    <div className="flex flex-col space-y-1 w-full ">
                        <h6>{item?.heading}</h6>
                        <p className="break-words">{item?.content}</p>
                    </div>
                )}

            </div>
        
            <div className={`fixed w-full bottom-0 flex justify-center items-center z-50 h-24`}>
                <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" 
                    onClick={()=>router.push(router.asPath + '/add')}>
                    Post Notifications
                </button>
            </div>
            
        </div>
    )
}

JobNotifications.getLayout = function getLayout(page) {
    return (
      <CompanyLayout notShowHeader={true} notShowFooter={true}>
        {page}
      </CompanyLayout>
    )
}