import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getCollegeNotifications } from '@/services/college.service'

import CollegeLayout from '@/modules/Layout/CollegeLayout'
import ViewMore from '@/components/Text/ViewMore'
import Skelton from '@/components/Skelton/Skelton'
import CollegeNotificationCardSmall from '@/components/Cards/College/CollegeNotificationCardSmall'
import { useAuthContext } from 'store/Context'

export default function CollegeHomePage() {

    const { user } = useAuthContext()

    const router = useRouter()

    const [notificationsData, setnotificationsData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
  
    useEffect(() => {
       user?.id && getCollegeNotifications({id: user?.id, setnotificationsData: setnotificationsData, seterror: seterror, setloading: setloading})
    }, [user])

    const handleViewNotification = (id) => {
        router.push(`/college/notification/${id}`)
    }
       

    return (
        <div className='page-top'>

            {/* posted notifications  */}
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center'>
                    <h5>Posted Notifications</h5>
                    <ViewMore onClick={()=>router.push('/college/notification')}/>
                </div>
               { loading ?
                    <Skelton height='h-60' size={[1]}/> :
                    <div className='flex overflow-x-auto no-scrollbar space-x-6 pb-4'>
                        { notificationsData?.map((item)=> 
                            <CollegeNotificationCardSmall key={item?.id} data={item} handleViewNotification={handleViewNotification}/>
                        )}
                    </div>
                }
            </div>

            
        </div>
    )
}

CollegeHomePage.getLayout = function getLayout(page) {
    return (
      <CollegeLayout>
        {page}
      </CollegeLayout>
    )
}