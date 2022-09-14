import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getStudentById } from '@/services/student.service'
import { getSpacesByStudentId } from '@/services/space.service'


import StudentProfile from '@/components/Profile/Student/StudnetProfile'
import StudentProfileTabs from '@/components/Profile/Student/StudentProfileTabs'
import CollegeLayout from '@/modules/Layout/CollegeLayout'

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

  

  return (
    <div className='flex flex-col space-y-6 '>

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
      <CollegeLayout headerX={{back: '/college/student'}} notShowFooter={true} notShowHeader={true}>
        {page}
      </CollegeLayout>
    )
}
