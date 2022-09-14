import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import { useAuthContext } from "store/Context"

import Tabs from "@/components/Navigation/Tabs"
import CollegeLayout from "@/modules/Layout/CollegeLayout"
import CollegeNotificationCard from "@/components/Cards/College/CollegeNotificationCard"
import { getStudentsByCollege } from "services/student.service"
import ViewMore from "@/components/Text/ViewMore"
import StudentCardSmall from "@/components/Cards/Student/StudentCardSmall"
import Skelton from "@/components/Skelton/Skelton"


export default function CollegeStudentPage() {

  const { user } = useAuthContext()

  const router = useRouter()

  const [studentsData, setstudentsData] = useState(null)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)

  useEffect(() => {
    getStudentsByCollege({id: user?.id,setstudentsData: setstudentsData, seterror: seterror, setloading: setloading})
  }, [])

  const handleViewStudent = (id) => {
    router.push(`/college/student/${id}`)
  }

  const hanldeRouting = (route) => {
    router.push(`/college/${route}`)
  } 

  return (
    <div className="page-top">
      <Tabs hanldeRouting={hanldeRouting} route={router.asPath}
        data={[
          {name: 'Students', route: 'student'},
          {name: 'Notifications', route: 'notification'},
        ]} />

      <div className="flex flex-col space-y-3">
        <div className='flex justify-between items-center '>
            <h5>Students Registered</h5>
        </div>

          {/* student card */}
          <div className='flex flex-col space-y-6'>
            {loading ?
              <Skelton height='h-60' size={[1,2,3]}/> :
              <div className=" flex overflow-x-auto no-scrollbar space-x-6 pb-4">
                { studentsData?.map((student) => 
                <StudentCardSmall image={student?.image} studentId={student?.id} course={student?.course} name={student?.name} handleRouting={handleViewStudent}/>)}
              </div>
            
          }
          </div>
        </div>

    </div>
  )
}

CollegeStudentPage.getLayout = function getLayout(page) {
    return (
      <CollegeLayout>
        {page}
      </CollegeLayout>
    )
}