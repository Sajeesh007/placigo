import { MdWork } from 'react-icons/md'
import { BsFillCalendarEventFill } from 'react-icons/bs'

export default function JobCardForStudentAndCollege({ data, handleApplyJob }) {
    return (
        <div className={`flex flex-col space-y-2 grdnt-indigo w-full rounded-3xl py-4 px-6`}>
            {/* icon */}
            <div className='flex space-x-4 items-center'>
                <div className='flex justify-center items-center bg-white p-3 rounded-3xl'>
                    <img src={data?.company?.image} alt={data?.company?.name} className='w-8 h-8 scale-150'/>
                </div>
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

            <div className='flex items-center justify-center space-x-20 pt-2'>
                <button className='bg-white px-4 font-semibold rounded-xl text-indigo-600 py-2 w-full' 
                    onClick={()=>handleApplyJob(data?.company?.id, data?.id)}>
                    Apply
                </button>
            </div>
        </div>
    )
}
