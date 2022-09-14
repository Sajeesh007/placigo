import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getCollegeNotifications } from 'services/college.service'

import { MdOutlineAdd } from 'react-icons/md'

import CollegeLayout from '@/modules/Layout/CollegeLayout'
import Tabs from '@/components/Navigation/Tabs'
import CollegeNotificationCard from '@/components/Cards/College/CollegeNotificationCard'
import { useAuthContext } from 'store/Context'

export default function CollegeNotifications() {

  const { user } = useAuthContext()

  const router = useRouter()

  const [notificationsData, setnotificationsData] = useState(null)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)

  useEffect(() => {
    user?.id && getCollegeNotifications({id: user?.id, setnotificationsData: setnotificationsData, seterror: seterror, setloading: setloading})
  }, [user])

  const hanldeRouting = (route) => {
    router.push(`/college/${route}`)
  } 

  const handleViewNotification = (id) => {
    router.push(`/college/notification/${id}`)
  }
   
  return (
    <div className='page-top'>

      <Tabs hanldeRouting={hanldeRouting} route={router.asPath}
        data={[
          {name: 'Students', route: 'student'},
          {name: 'Notifications', route: 'notification'},
        ]} />

      <div className='flex justify-between items-center '>
        <h5>Posted Notifications</h5>
        <button className='bg-indigo-600 rounded-2xl flex justify-center space-x-1 items-center w-24 py-1 px-2  font-bold text-lg' 
          onClick={()=>router.push('/college/notification/add')}>
          <MdOutlineAdd className='w-7 h-7'/>
          <p className='text-lg'> Add </p>
        </button>
      </div>

      {/* notification card */}
      <div className='flex flex-col space-y-6'>
        {loading ?
          [1,2,3,4,5].map((item)=> <div key={item} className='w-full bg-zinc-700 animate-pulse h-40 rounded-3xl'/>)
        :
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
      <CollegeLayout>
        {page}
      </CollegeLayout>
    )
}