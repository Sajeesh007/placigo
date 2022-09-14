import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getJobs } from '@/services/job.service'
import { getCollegeNotifications } from '@/services/college.service'
import { useAuthContext } from '@/store/Context'

import StudentLayout from '@/modules/Layout/StudentLayout'
import JobCard from '@/components/Cards/Job/JobCard'
import ViewMore from '@/components/Text/ViewMore'
import CollegeNotificationCardSmall from '@/components/Cards/College/CollegeNotificationCardSmall'
import Skelton from '@/components/Skelton/Skelton'

export default function StudentHomePage() {

    const { user } = useAuthContext()

    const router = useRouter()

    const [jobsData, setjobsData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
    const [notificationsData, setnotificationsData] = useState(null)
  
    useEffect(() => {
        getCollegeNotifications({id: user?.user_metadata?.college,setnotificationsData: setnotificationsData, seterror: seterror, setloading: setloading})
        getJobs({setjobsData: setjobsData, seterror: seterror, setloading: setloading})
    }, [])
    
    const handleViewNotification = (id) => {
        router.push(`/student/college/${id}`)
    }
    const handleApplyJob = (jobId, companyId) => {
        router.push(`/student/company/${companyId}/job/${jobId}`)
    }

    return (
        <div className='page-top'>


            {/* Suggested jobs */}
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center'>
                    <h5>Suggested Jobs</h5>
                    <ViewMore onClick={()=>router.push('/student/jobs')}/>
                </div>
                <div className='flex overflow-x-auto no-scrollbar space-x-6 pb-4'>
                { loading ?
                    <Skelton height='h-60' size={[1]}/> :
                    <div className='flex overflow-x-auto no-scrollbar space-x-6 pb-4'>
                        { jobsData?.map((job)=> 
                            <JobCard key={job.id} data={job} handleApply={handleApplyJob} />
                        )}
                    </div>
                }
                </div>
            </div>

            {/* From College */}
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center'>
                    <h5>From College</h5>
                    <ViewMore onClick={()=>router.push('/student/college')}/>
                </div>
                { loading ?
                    <Skelton height='h-60' size={[1]}/> :
                    <div className='flex overflow-x-auto no-scrollbar space-x-6 pb-4'>
                        { notificationsData?.map((item)=> 
                            <CollegeNotificationCardSmall key={item?.id} data={item} handleViewNotification={handleViewNotification}/>
                        )}
                    </div>
                }
            </div>
            
        </div>
    )
}

StudentHomePage.getLayout = function getLayout(page) {
    return (
      <StudentLayout>
        {page}
      </StudentLayout>
    )
}