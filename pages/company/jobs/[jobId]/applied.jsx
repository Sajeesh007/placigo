import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useCompanyContext } from 'store/Context'
import { getJobAppliedStudents, getJobById } from 'services/company.service'

import { MdOutlineArrowBack } from 'react-icons/md'

import CompanyLayout from '@/modules/Layout/CompanyLayout'
import StudentCard from '@/components/Cards/Student/StudentCard'


export default function AppliedStudentsPage() {

    const { globalJobData, setglobalJobData } = useCompanyContext()

    const router = useRouter()

    const [studentData, setstudentData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
        globalJobData && getJobAppliedStudents({id: globalJobData?.applied, setstudentData: setstudentData, seterror: seterror, setloading: setloading})
    }, [globalJobData])

    useEffect(() => {
        !globalJobData && getJobById({id: router.query.jobId, setglobalJobData: setglobalJobData, seterror: seterror, setloading: setloading})
    }, [router.isReady])

    const handleRouting = (studentId, collegeId) => {
        router.push(`/company/colleges/${collegeId}students/${studentId}`)
    }

    return (
        <div className='flex flex-col relative min-h-screen'>

            {/* header */}
            <div className="sticky w-screen h-16 border-b border-zinc-600 flex justify-center items-center px-3">
                <MdOutlineArrowBack className='w-8 h-8 text-white absolute left-3' onClick={()=>router.push('/company/jobs')}/>
                <h6>{globalJobData?.company?.name}</h6>
            </div>

            {/* Student Details */}
            <div className='flex flex-col items-center space-y-4 px-3 pt-4 w-screen pb-24'>
                <h5>Applied Students</h5>
                { loading ?
                    <div className='flex flex-col space-y-4 w-full'>
                        {[1,2,3,4,5,6,7].map((item)=> <div key={item} className='w-full bg-zinc-700 animate-pulse h-20 rounded-3xl'/>)} 
                    </div> :
                    <div className='flex flex-col space-y-6 w-full'>
                        { studentData?.map((student)=>
                            <StudentCard name={student?.name} college={student?.college?.name} studentId={student?.id} 
                                collegeId={student?.college?.id} key={student?.id} handleRouting={handleRouting}/>
                        )}
                    </div>
                }
            </div>

            {/* Footer */}
            <div className="fixed w-screen h-20 bottom-0 flex justify-center items-center bg-zinc-900">
              <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" onClick={()=>router.push(`/company/jobs/${router.query.jobId}`)}>
                View Job Details
              </button>
            </div>

        </div>
    )
}

AppliedStudentsPage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout  notShowHeader={true} notShowFooter={true}>
        {page}
      </CompanyLayout>
    )
}