import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAuthContext } from 'store/Context'
import { addCollegeNotification } from 'services/college.service'

import CollegeLayout from '@/modules/Layout/CollegeLayout'
import NotificationContent from '@/components/Notification/NotificationContent'
import AddCollegeNotification from '@/components/Notification/AddCollegeNotification'


export default function AddNewCollegeNotificationPage() {

    const {user} = useAuthContext()

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [notificationData, setnotificationData] = useState(null)
    const [showView, setshowView] = useState(false)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    // store data to state for viewing 
    const onSubmit = (data) => {
        data.college = user?.id
        data.content = {
            description: data.details.replace(/\n+/g,'').split(","),
            link_text: data.link_text,
            link_url: data.link_url
        }
        data.organizer = {
          name: data.organizer,
          location: data.location
        }
        delete data.details
        delete data.link_text
        delete data.link_url
        delete data.location
        setnotificationData(data)
        setshowView(true)
    }

     // save data to database
     const saveNotification = () => {
        addCollegeNotification({
            data: notificationData,
            router: router,
            setloading: setloading,
            seterror: seterror,
        }) 
      }


  return (
    <div className='flex flex-col min-h-screen pb-8'>

        {/* writing area  */}
        { !showView ? 
            <AddCollegeNotification register={register} errors={errors} handleSubmit={handleSubmit} onSubmit={onSubmit}/>
        : 
            <NotificationContent data={notificationData} setshowView={setshowView}/>
        }

        {/* Footer */}
        { showView &&
          <div className="fixed w-screen bottom-0 flex space-x-6 pb-4 justify-center items-center bg-zinc-900">    
            <button className="bg-indigo-600 h-12 w-40 rounded-2xl text-lg font-bold" 
              onClick={() => setshowView(false)}>
              Edit 
            </button>
            <button className="bg-indigo-600 h-12 w-40 rounded-2xl text-lg font-bold"
              onClick={saveNotification}>
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        }
    </div>
  )
}

AddNewCollegeNotificationPage.getLayout = function getLayout(page) {
    return (
      <CollegeLayout headerX={{close: '/college/notification'}} 
        notShowFooter={true} notShowHeader={true}>
        {page}
      </CollegeLayout>
    )
}