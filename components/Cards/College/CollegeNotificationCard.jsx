import { BsPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export default function CollegeNotificationCard({data, handleViewNotification}) {

    return (
        <div className='flex flex-col space-y-3 grdnt-indigo h-30 w-full rounded-3xl  py-4 px-6'>

            {/* heading */}
            <div className='flex flex-col space-y-px '>
                <div className="flex justify-between  items-center">
                    <h6>{data?.title}</h6>
                    <p>{data?.date}</p>
                </div>
                <p>{data?.type}</p>
            </div>

            {/* description */}
            <div className='flex items-center justify-between'>
               <div className="flex items-center space-x-1">
                    <BsPeopleFill className='w-5 h-5 mr-1'/>
                    <p>{data?.organizer?.name}</p>
               </div>
               <div className="flex items-center space-x-1">
                    <MdLocationOn className='w-6 h-6 '/>
                    <p>{data?.organizer?.location}</p>
               </div>
            </div>

            {/* more */}
            <button className="flex justify-center bg-white px-4 font-semibold rounded-xl text-teal-600 py-3"
                onClick={()=>handleViewNotification(data?.id)}>
                View Full Details
            </button>
        </div>
  )
}
