import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'



import CompanyLayout from '@/modules/Layout/CompanyLayout'
import CollegeCard from '@/components/Cards/College/CollegeMessageCard'
import ViewMore from '@/components/Text/ViewMore'
import JobCardX from '@/components/Cards/Company/JobCardX'
import { getJobs } from 'services/company.service'

export default function CompanyHomePage() {

    const router = useRouter()

    const [jobsData, setjobsData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
      getJobs({setjobsData: setjobsData, seterror: seterror, setloading: setloading})
    }, [])
    

    const handleViewDetails = (id) => {
        router.push(`/company/jobs/${id}`)
    }

    return (
        <div className='page-top'>

            {/* Small Dashboard */}


            {/* Suggested jobs */}
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center'>
                    <h5>Posted Jobs</h5>
                    <ViewMore onClick={()=>router.push('/company/jobs')}/>
                </div>
                { loading ?
                    <div className='w-full bg-zinc-700 animate-pulse h-48 rounded-3xl'/> :
                    <div className='flex overflow-x-auto no-scrollbar space-x-6 pb-4'>
                        { jobsData?.map((job)=> 
                            <JobCardX key={job.id} id={job.id} companyName={job.company.name} companyLogo={job.company.logo} jobType={job.type} 
                                location={job.location} jobTitle={job.title} handleViewDetails={handleViewDetails} loading={loading}/>
                        )}
                    </div>
                }
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

CompanyHomePage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout>
        {page}
      </CompanyLayout>
    )
}