import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { geJobsByCompanyId } from 'services/job.service'

import CompanyLayout from '@/modules/Layout/CompanyLayout'
import ViewMore from '@/components/Text/ViewMore'
import JobCardForCompany from '@/components/Cards/Job/JobCardForCompany'
import { useAuthContext } from 'store/Context'

export default function CompanyHomePage() {

    const { user } = useAuthContext()

    const router = useRouter()

    const [jobsData, setjobsData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
       user?.id && geJobsByCompanyId({id: user?.id, setjobsData: setjobsData, seterror: seterror, setloading: setloading})
    }, [user])
    

    const handleViewDetails = (id) => {
        router.push(`/company/jobs/${id}`)
    }

    return (
        <div className='page-top'>

            {/* jobs */}
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center'>
                    <h5>Posted Jobs</h5>
                    <ViewMore onClick={()=>router.push('/company/jobs')}/>
                </div>
                { loading ?
                    <div className='w-full bg-zinc-700 animate-pulse h-48 rounded-3xl'/> :
                    <div className='flex overflow-x-auto no-scrollbar space-x-6 pb-4'>
                        { jobsData?.map((job)=> 
                            <JobCardForCompany key={job.id} data={job} handleViewDetails={handleViewDetails}/>
                        )}
                    </div>
                }
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