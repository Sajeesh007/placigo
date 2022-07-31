import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { useCompanyContext } from "store/Context"
import { getJobById } from "services/company.service"

import { MdOutlineArrowBack } from "react-icons/md"
import { TbEdit } from "react-icons/tb"

import JobContent from "@/components/Job/JobContent"
import StudentLayout from "@/modules/Layout/StudentLayout"


export default function CompanyJobByIdPage() {

  const { setglobalJobData } = useCompanyContext()

    const router = useRouter()

    const [jobData, setjobData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
      getJobById({id: router.query.jobId, setjobData: setjobData, setglobalJobData: setglobalJobData, seterror: seterror, setloading: setloading})
    }, [router.isReady])

    return (
        <div className='relative min-h-screen'>

            {/* header */}
            <div className="sticky w-screen h-16 flex justify-between items-center px-3">
                <MdOutlineArrowBack className='w-8 h-8 text-white' onClick={()=>router.push('/company/jobs')}/>
                <h6>{jobData?.company?.name}</h6>
                <div className="flex space-x-4">
                    <TbEdit className='w-8 h-8'/>
                </div> 
            </div>

            {/* content */}
            <JobContent data={jobData}/>

            {/* Footer */}
            <div className="fixed w-screen h-20 bottom-0 flex justify-center items-center bg-zinc-900">
              <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" onClick={()=>router.push(`${router.asPath}/applied`)}>
                Apply
              </button>
            </div>
        </div>
    )
}

CompanyJobByIdPage.getLayout = function getLayout(page) {
    return (
      <StudentLayout notShowHeader={true} notShowFooter={true}>
        {page}
      </StudentLayout>
    )
}