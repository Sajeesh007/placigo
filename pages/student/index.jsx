import { useRouter } from 'next/router'

import CollegeMessageCard from '@/components/Cards/College/CollegeMessageCard'
import JobCard from '@/components/Cards/Company/JobCard'
import ViewMore from '@/components/Text/ViewMore'
import StudentLayout from '@/modules/Layout/StudentLayout'

export default function StudentHomePage() {

    const router = useRouter()

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
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
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