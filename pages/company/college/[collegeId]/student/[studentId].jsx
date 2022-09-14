import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getStudentById } from 'services/student.service'

import { MdOutlineArrowBack } from 'react-icons/md'

import CompanyLayout from '@/modules/Layout/CompanyLayout'
import StudentProfile from '@/components/Profile/Student/StudnetProfile'
import StudentProfileTabs from '@/components/Profile/Student/StudentProfileTabs'
import { getSpacesByStudentId } from 'services/space.service'

export default function StudentProfilePage() {

  const router = useRouter()

  const [spaceData, setspaceData] = useState(null)
  const [studentData, setstudentData] = useState(null)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)

  const getData =  async () => {
    await getStudentById({id: router?.query?.studentId, setstudentData: setstudentData, seterror: seterror, setloading: setloading})
    await getSpacesByStudentId({id: router?.query?.studentId, setspaceData: setspaceData, setloading: setloading, seterror: seterror})
  }
  useEffect(() => {
    router.isReady && getData()
  }, [router.isReady])
  
  console.log(studentData);

  return (
    <div className='flex flex-col'>
        {/* header */}
        <div className="sticky w-screen h-14 flex justify-center items-center px-3 ">
            <MdOutlineArrowBack className='w-8 h-8 text-white absolute left-3' 
              onClick={()=>router.push(`/company/college/${studentData?.college?.id}`)}/>
        </div>

        {/* content */}
        <StudentProfile data={studentData} />

        {/* tabs for spaces and students */}
        <div className='px-4 pt-4'>
          <StudentProfileTabs studentData={studentData} spaceData={spaceData}/>
        </div>
    </div>
  )
}

StudentProfilePage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout notShowFooter={true} notShowHeader={true}>
        {page}
      </CompanyLayout>
    )
}
