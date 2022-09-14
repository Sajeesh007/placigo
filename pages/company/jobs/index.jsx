import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { geJobsByCompanyId, getJobs } from 'services/job.service'

import { MdOutlineAdd } from 'react-icons/md'

import CompanyLayout from '@/modules/Layout/CompanyLayout'
import JobCardForCompanySmall from '@/components/Cards/Job/JobCardForCompanySmall'
import { useAuthContext } from 'store/Context'

export default function JobsPage() {

  const router = useRouter()

  const { user } = useAuthContext()


  const [jobsData, setjobsData] = useState(null)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)

  useEffect(() => {
    geJobsByCompanyId({id: user?.id, setjobsData: setjobsData, seterror: seterror, setloading: setloading})
  }, [])

  const handleViewDetails = (id) => {
    router.push(`/company/jobs/${id}`)
  }
  
  return (
    <div className='flex flex-col p-4 space-y-4'>
        <div className='flex justify-between items-center '>
          <h5>Posted Jobs</h5>
          <button className='bg-indigo-600 rounded-2xl flex justify-center space-x-1 items-center w-24 py-1 px-2  font-bold text-lg' 
            onClick={()=>router.push('/company/jobs/add')}>
            <MdOutlineAdd className='w-7 h-7'/>
            <p className='text-lg'> Add </p>
          </button>
        </div>

        {/* job card */}
        { loading ?
          <div className='flex flex-col space-y-4'>
            {[1,2,3,4].map((item)=> <div key={item} className='w-full bg-zinc-700 animate-pulse h-40 rounded-3xl'/>)} 
          </div> :
          <div className='flex flex-col space-y-6 pb-4'>
              { jobsData?.map((job)=> 
                  <JobCardForCompanySmall key={job.id} id={job.id} data={job} handleViewDetails={handleViewDetails} />
              )}
          </div>
        }

    </div>
  )
}

JobsPage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout>
        {page}
      </CompanyLayout>
    )
}