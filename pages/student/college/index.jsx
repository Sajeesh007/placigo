import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useAuthContext } from '@/store/Context'
import { getCollegeNotifications } from '@/services/college.service'

import { MdOutlineAdd } from 'react-icons/md'

import CollegeNotificationCard from '@/components/Cards/College/CollegeNotificationCard'
import StudentLayout from '@/modules/Layout/StudentLayout'

export default function CollegeNotifications() {

  const { user } = useAuthContext()

  const router = useRouter()

  const [notificationsData, setnotificationsData] = useState(null)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)

  useEffect(() => {
    user?.user_metadata?.college && getCollegeNotifications({id: user?.user_metadata?.college, setnotificationsData: setnotificationsData, seterror: seterror, setloading: setloading})
  }, [user])


  const handleViewNotification = (id) => {
    router.push(`/student/college/${id}`)
  }
   
  return (
    <div className='page-top'>

      <div className='flex justify-between items-center '>
        <h5>Notifications</h5>
      
      </div>

      {/* notification card */}
      <div className='flex flex-col space-y-6'>
        {loading ?
          [1,2,3,4,5].map((item)=> <div key={item} className='w-full bg-zinc-700 animate-pulse h-40 rounded-3xl'/>):
        notificationsData?.map((notification) => 
          <CollegeNotificationCard data={notification} handleViewNotification={handleViewNotification}/>
        )
        }
      </div>
    </div>
  )
}

CollegeNotifications.getLayout = function getLayout(page) {
    return (
      <StudentLayout>
        {page}
      </StudentLayout>
    )
}