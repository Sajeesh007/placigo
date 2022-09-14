import { MdWork } from 'react-icons/md'
import { BsFillCalendarEventFill } from 'react-icons/bs'

export default function JobCardForStudentAndCollegeSmall({ data, handleApplyJob }) {

    console.log(data);
    
    return (
        <div className={`flex flex-col space-y-2 grdnt-indigo w-full rounded-3xl py-4 px-6`}
            onClick={()=>handleApplyJob(data?.id)}>
            {/* icon */}
            <div className='flex space-x-4 items-center'>

                {/* company, place */}
                <div className='flex flex-col'>
                    <h6>{data?.title?.length > 23 ? data?.title?.slice(0,23).concat('...') : data?.title }</h6>
                    <p >{data?.location}</p>
                </div>
            </div>

            {/* job title, type */}
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-1'>
                        <MdWork className='w-3 h-3'/>
                        <p>{data?.type}</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <BsFillCalendarEventFill className='w-3 h-3'/>
                        <p>{data?.last_date}</p>
                    </div> 
                </div> 
            </div>
        </div>
    )
}
