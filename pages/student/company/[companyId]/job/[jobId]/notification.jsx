import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import {  getJobNotifications } from "@/services/job.service"

import { MdOutlineArrowBack } from "react-icons/md"

import Skelton from "@/components/Skelton/Skelton"
import StudentLayout from "@/modules/Layout/StudentLayout"


export default function JobNotificationsStudent() {

    const router = useRouter()

    const [notifications, setnotifications] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
      if(router?.isReady){
        getJobNotifications({setnotifications: setnotifications, jobId: router.query?.jobId, seterror: seterror, setloading: setloading})
      }
    }, [router.isReady])


    return (
        <div className='relative min-h-screen'>

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
            
        </div>
    )
}

JobNotificationsStudent.getLayout = function getLayout(page) {
    return (
      <StudentLayout headerX={{back: '/student/jobs'}}
      notShowHeader={true} notShowFooter={true}>
        {page}
      </StudentLayout>
    )
}