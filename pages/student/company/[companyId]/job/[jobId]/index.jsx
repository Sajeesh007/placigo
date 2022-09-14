import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { supabase } from "supabse"

import { useCompanyContext } from "store/Context"
import { applyJob, getJobAppliedByStudentId, getJobById } from "services/job.service"

import { MdOutlineArrowBack } from "react-icons/md"

import JobContent from "@/components/Job/JobContent"
import StudentLayout from "@/modules/Layout/StudentLayout"


export default function StudentCompanyJobByIdPage() {

    const { setglobalJobData } = useCompanyContext()
    const user = supabase.auth.user()

    const router = useRouter()

    const [jobData, setjobData] = useState(null)
    const [jobApplied, setjobApplied] = useState(true)
    const [success, setsuccess] = useState(false)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
      getJobById({id: router.query.jobId, setjobData: setjobData, setglobalJobData: setglobalJobData, seterror: seterror, setloading: setloading})
      getJobAppliedByStudentId({jobId: router.query.jobId, studentId: user.id, setjobApplied: setjobApplied, seterror: seterror, setloading: setloading})
    }, [router.isReady])
 
    const applyForJob = () => {
      applyJob({jobId: router?.query?.jobId, studentId: user.id, setsuccess: setsuccess, seterror: seterror, setloading: setloading })
    }

    return (
        <div className='relative min-h-screen'>

            {/* content */}
            <JobContent data={jobData}/>

            {/* Footer */}
            <div className="fixed w-screen h-20 bottom-0 flex justify-center space-x-4 px-4 items-center bg-zinc-900">
              { !jobApplied ? <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" onClick={applyForJob}>
                { (jobData && loading) ? 'Applying'  : 'Apply'}
              </button> : 
              <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" onClick={()=> router.push(router.asPath + '/notification')}>
                Notifications
              </button>}
              <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" onClick={()=> router.push('/student/company/' + jobData?.company?.id )}>
                View Company
              </button>
            </div>
        </div>
    )
}

StudentCompanyJobByIdPage.getLayout = function getLayout(page) {
    return (
      <StudentLayout headerX={{back: '/student/jobs'}}
      notShowHeader={true} notShowFooter={true}>
        {page}
      </StudentLayout>
    )
}