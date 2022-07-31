import { MdWork } from 'react-icons/md'

export default function JobCardX({ id, companyName, companyLogo, location, jobTitle, jobType, handleViewDetails, loading }) {
    return (
        <div className={`flex flex-col space-y-2 grdnt-indigo w-96 min-w-fit rounded-3xl py-4 px-6`}>
            <div className='flex space-x-4 items-center'>
                    {/* icon */}
                    <div className='flex justify-center items-center bg-white p-3 rounded-3xl'>
                        <img src={companyLogo} alt={companyName} className='w-8 h-8 scale-150'/>
                    </div>
                    {/* company, place */}
                    <div className='flex flex-col'>
                        <h6>{companyName}</h6>
                        <p >{location}</p>
                    </div>
            </div>

            {/* job title, type */}
            <div className='flex flex-col'>
                <h6 className='w-52'>{jobTitle}</h6>
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
