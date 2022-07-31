import { useRouter } from 'next/router'

import CollegeMessageCard from '@/components/Cards/College/CollegeMessageCard'
import JobCard from '@/components/Cards/Company/JobCard'
import ViewMore from '@/components/Text/ViewMore'
import StudentLayout from '@/modules/Layout/StudentLayout'
import { useEffect, useState } from 'react'
import { getJobs } from 'services/company.service'

export default function StudentHomePage() {

    const router = useRouter()

    const [jobsData, setjobsData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
  
    useEffect(() => {
      getJobs({setjobsData: setjobsData, seterror: seterror, setloading: setloading})
    }, [])

    const handleApplyJob = (jobId, companyId) => {
        router.push(`/student/company/${companyId}/job/${jobId}`)
    }

    return (
        <div className='page-top'>

            {/* Small Dashboard */}


            {/* Suggested jobs */}
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center'>
                    <h5>Suggested Jobs</h5>
                    <ViewMore onClick={()=>router.push('/student/jobs')}/>
                </div>
                <div className='flex overflow-x-auto no-scrollbar space-x-6 pb-4'>
                { loading ?
                    <div className='w-full bg-zinc-700 animate-pulse h-48 rounded-3xl'/> :
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
                <div className='flex overflow-x-auto space-x-6 no-scrollbar pb-4'>
                    <CollegeMessageCard/>
                </div>
            </div>

            {/* Current placements */}
            <div className='flex flex-col space-y-2'>
                <h5>Latest Placements</h5>
                <div className='flex flex-col'>

                </div>

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