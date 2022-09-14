import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getJobs } from '@/services/job.service'

import ViewMore from '@/components/Text/ViewMore'
import StudentLayout from '@/modules/Layout/StudentLayout'
import JobCardForStudentAndCollege from '@/components/Cards/Job/JobCardForStudentAndCollege'
import CompanyCardForStudentAndCollegeSmall from '@/components/Cards/Company/CompanyCardForStudentAndCollegeSmall'

export default function StudentJobsPage() {

    const router = useRouter()

    const [jobsData, setjobsData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
  
    useEffect(() => {
      getJobs({setjobsData: setjobsData, seterror: seterror, setloading: setloading})
    }, [])

    const handleViewCompany = (companyId) => {
        router.push(`/student/company/${companyId}`)
    }

    const handleApplyJob = (companyId, jobId) => {
      router.push(`/student/company/${companyId}/job/${jobId}`)
  }

    return (
        <div className='page-top'>

            {/* Jobs */}
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center'>
                    <h5>Jobs</h5>
                </div>
                { loading ?
                    <div className='flex flex-col space-y-4'>
                        {[1,2,3,4].map((item)=> <div key={item} className='w-full bg-zinc-700 animate-pulse h-40 rounded-3xl'/>)} 
                    </div> :
                    <div className='flex flex-col space-y-6'>
                        { jobsData?.map((job)=> 
                            <JobCardForStudentAndCollege key={job.id} data={job} handleApplyJob={handleApplyJob} />
                        )}
                    </div>
                }
            </div>
            
        </div>
    )
}

StudentJobsPage.getLayout = function getLayout(page) {
    return (
      <StudentLayout>
        {page}
      </StudentLayout>
    )
}