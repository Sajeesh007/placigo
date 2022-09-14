import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { getJobAppliedById, getJobById } from "services/job.service"

import { MdOutlineArrowBack } from "react-icons/md"
import { TbEdit } from "react-icons/tb"

import JobContent from "@/components/Job/JobContent"
import CompanyLayout from "@/modules/Layout/CompanyLayout"
import JobAppliedStudents from "@/components/Job/JobAppliedStudents"


export default function JobByIdPage() {


    const router = useRouter()

    const [jobData, setjobData] = useState(null)
    const [studentsData, setstudentsData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
    const [showApplied, setshowApplied] = useState(false)

    useEffect(() => {
      if(router?.isReady){
        getJobById({id: router.query.jobId, setjobData: setjobData, seterror: seterror, setloading: setloading})
        getJobAppliedById({id: router.query.jobId, setstudentsData: setstudentsData, seterror: seterror, setloading: setloading})
      }
    }, [router.isReady])


    return (
        <div className='relative min-h-screen'>

            {/* header */}
            <div className="sticky w-screen h-16 flex justify-between items-center px-3">
                <MdOutlineArrowBack className='w-8 h-8 text-white' onClick={()=>router.push(`/company/jobs`)}/>
                <h6>{jobData?.company?.name}</h6>
                <div className="flex space-x-4" onClick={()=> router.push(`${router.asPath}/edit`)}>
                    <TbEdit className='w-8 h-8'/>
                </div> 
            </div>

            {/* content */}
            { showApplied ? 
              <JobAppliedStudents studentsData={studentsData} loading={loading}/> :
              <JobContent data={jobData} loading={loading}/>
            }

            {/* Footer */}
            { studentsData?.length > 0 && 
              <div className={`fixed w-full bottom-0 flex justify-center items-center z-50 ${showApplied ? 'h-36' : 'h-24'}`}>
                { showApplied ?
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" 
                    onClick={()=>router.push(router.asPath + '/notification')}> 
                      Show Notifications
                    </button>
                    <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" 
                    onClick={()=> setshowApplied(!showApplied)}>
                      View Job Details
                    </button> 
                  </div> :
                  <button className="bg-indigo-600 h-12 w-80 rounded-2xl text-lg font-bold" 
                    onClick={()=> setshowApplied(!showApplied)}>
                    {showApplied ? 'View Job Details' : "Applied Students"} 
                  </button>
                }
              </div>
            }
        </div>
    )
}

JobByIdPage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout notShowHeader={true} notShowFooter={true}>
        {page}
      </CompanyLayout>
    )
}