import { MdWork } from 'react-icons/md'

export default function JobCard({data, handleApply}) {
  return (
    <div className='flex flex-col space-y-2 grdnt-indigo h-30 w-96 rounded-3xl py-4 px-6'>

        <div className='flex space-x-4 items-center'>
                {/* icon */}
                <div className='flex justify-center items-center bg-white p-3 rounded-3xl'>
                    <img src={data?.company?.logo} className='w-8 h-8 text-indigo-600'/>
                </div>
                {/* company, place */}
                <div className='flex flex-col'>
                    <h6>{data?.company?.name}</h6>
                    <p >{data?.location}</p>
                </div>
        </div>

        {/* job title, type */}
        <div className='flex flex-col'>
            <h6>{data?.title}</h6>
            <div className='flex items-center space-x-1'>
                <MdWork className='w-3 h-3'/>
                <p>{data?.type}</p>
            </div>
        </div>

        <div className='flex items-center space-x-20'>
            <h6 className=''>{data?.salary}</h6>
            <button className='bg-white px-4 font-semibold rounded-xl text-indigo-600 py-2' onClick={()=>handleApply(data?.id, data?.company?.id)}>
                Apply
            </button>

        </div>
    </div>
  )
}
