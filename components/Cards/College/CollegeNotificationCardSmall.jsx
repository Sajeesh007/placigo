

export default function CollegeNotificationCardSmall({data, handleViewNotification}) {

    return (
        <div className='flex flex-col justify-between grdnt-indigo h-40 w-full  rounded-3xl  py-4 px-6'>

            {/* heading */}
            <div className='flex flex-col space-y-px w-40'>
                <h6>{data?.title}</h6>
                <p>{data?.type}</p>
            </div>


            {/* more */}
            <button className="flex justify-center bg-white px-4 font-semibold rounded-xl text-teal-600 py-3"
                onClick={()=>handleViewNotification(data?.id)}>
                View
            </button>
        </div>
  )
}
