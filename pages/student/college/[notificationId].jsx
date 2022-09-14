import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { getCollegeNotificationById } from "services/college.service"

import NotificationContent from "@/components/Notification/NotificationContent"
import StudentLayout from "@/modules/Layout/StudentLayout"


export default function CollegeNotificationByIdPage() {

    const router = useRouter()

    const [notificationData, setnotificationData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
      getCollegeNotificationById({
        notificationId: router.query.notificationId, 
        setnotificationData: setnotificationData, 
        seterror: seterror, 
        setloading: setloading})
    }, [router.isReady])



    return (
        <div className='relative min-h-screen'>

            {/* content */}
            <NotificationContent data={notificationData} />
            
        </div>
    )
}

CollegeNotificationByIdPage.getLayout = function getLayout(page) {
    return (
      <StudentLayout headerX={{back: '/student/college'}}
        notShowHeader={true} notShowFooter={true}>
        {page}
      </StudentLayout>
    )
}