import { MdWork } from 'react-icons/md'
import { ImLocation } from 'react-icons/im'

export default function JobCardY({ id,location, jobTitle, jobType, handleViewDetails }) {


    return (
        <div className={`flex flex-col space-y-2 grdnt-indigo  w-full min-w-fit  rounded-3xl py-4 px-6`}>
            {/* job title, type */}
            <div className='flex flex-col space-y-1'>
                <h6 className='text-xl'>{jobTitle}</h6>
                <div className='flex items-center space-x-1'>
                    <ImLocation className='w-3 h-3'/>
                    <p >{location}</p>
                </div>
                <div className='flex items-center space-x-1'>
                    <MdWork className='w-3 h-3'/>
                    <p>{jobType}</p>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-20'>
                <button className='bg-white px-4 font-semibold rounded-xl text-indigo-600 py-2' onClick={()=>handleViewDetails(id)}>
                    View Details
                </button>
            </div>
        </div>
    )
}
