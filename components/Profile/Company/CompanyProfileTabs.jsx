import { useRouter } from 'next/router'
import { useState } from 'react'

import Spaces from '@/components/Cards/Space/Spaces'
import JobCardForStudentAndCollegeSmall from '@/components/Cards/Job/JobCardForStudentAndCollegeSmall'
import CompanyAbout from '@/components/List/CompanyAbout'

export default function CompanyProfileTabs({spaceData, jobData, companyData}) {

    const router = useRouter()

    const [active, setactive] = useState('spaces')

    const handleApplyJob = (id) => {
        router.push(`${router.asPath}/job/${id}`)
    }


    return (
        <div className='flex flex-col'>

            {/* tab menu */}
            <div className='flex justify-between items-center bg-zinc-900 h-14 rounded-2xl  border-2 border-indigo-600 text-white '>
                <div className={` h-14 flex items-center justify-center w-1/2 rounded-2xl rounded-r-none 
                    text-xl font-bold ${active == 'spaces' && 'text-white bg-indigo-600'}`}
                    onClick={()=>setactive('spaces')}>
                    Spaces
                </div>
                <div className={` h-14 flex items-center justify-center w-1/2 
                    text-xl font-bold ${active == 'jobs' && 'text-white bg-indigo-600'}`}
                    onClick={()=>setactive('jobs')}>
                    Jobs
                </div>
                <div className={`h-14 flex items-center justify-center w-1/2 rounded-2xl rounded-l-none
                    text-xl font-bold  ${active == 'about' && 'bg-indigo-600 text-white'}`}
                    onClick={()=>setactive('about')}>
                    About
                </div>
            </div>

            {/* details */}
            <div className='flex '>
                {   
                    active == 'spaces' ?
                        <div className='flex flex-col space-y-1 divide-y divide-zinc-500 w-full pt-3'>
                           {
                                spaceData?.map((item)=>
                                    <Spaces data={item} key={item?.id} /> )
                            } 
                        </div> :

                    active == 'jobs' ?
                        <div className='flex flex-col space-y-4 divide-y divide-zinc-500 w-full pt-4'>
                        {
                            jobData?.map((job)=>
                            <JobCardForStudentAndCollegeSmall key={job.id} data={job} handleApplyJob={handleApplyJob}/> )
                        } 
                        </div> :

                    active == 'about' &&
                        <CompanyAbout data={companyData}/>
                }
            </div>

        </div>
    )
}
