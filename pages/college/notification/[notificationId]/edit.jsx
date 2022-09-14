import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from 'supabse'

import { editCollegeNotification, getCollegeNotificationById } from 'services/college.service'

import CollegeLayout from '@/modules/Layout/CollegeLayout'
import NotificationContent from '@/components/Notification/NotificationContent'
import AddCollegeNotification from '@/components/Notification/AddCollegeNotification'


export default function EditCollegeNotificationPage() {

    const college = supabase.auth.user()

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [notificationData, setnotificationData] = useState(null)
    const [showView, setshowView] = useState(false)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    // get notification data
    useEffect(() => {
      router.isReady && getCollegeNotificationById({
            notificationId: router.query.notificationId, 
            setnotificationData: setnotificationData, 
            seterror: seterror, 
            setloading: setloading})
    }, [router.isReady])

    // force the fields to show default value
    useEffect(() => {
        reset({
            ...notificationData,
            location: notificationData?.organizer?.location,
            organizer: notificationData?.organizer?.name,
            details: notificationData?.content?.description.join(','),
            link_text: notificationData?.content?.link_text,
            link_url: notificationData?.content?.link_url,
        })
    }, [notificationData]);

    // store data to a state for viewing  
    const onSubmit = (data) => {
        data.college = college.id
        data.content = {
            description: data.details.replace(/\n+/g,'').split(","),
            link_text: data.link_text,
            link_url: data.link_url
        }
        data.organizer = {
          name: data.organizer,
          location: data.location
        }
        delete data.link_text
        delete data.link_url
        delete data.location
        delete data.details
        setnotificationData(data)
        setshowView(true)
    }

     // save data to database
     const saveEditedNotification = () => {
        editCollegeNotification({
            notificationId: router.query.notificationId, 
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
              onClick={saveEditedNotification}>
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        }
    </div>
  )
}

EditCollegeNotificationPage.getLayout = function getLayout(page) {
    return (
      <CollegeLayout headerX={{close: '/college/notification'}} 
        notShowFooter={true} notShowHeader={true}>
        {page}
      </CollegeLayout>
    )
}