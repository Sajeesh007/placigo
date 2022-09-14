import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { MdOutlineDateRange } from 'react-icons/md'
import { RiTimerLine } from 'react-icons/ri'

import DetailsIcon from '@/components/List/DetailsIcon'

export default function JobContent({data, loading}) {
    
    return (
        <div className="flex flex-col items-center pt-4 space-y-10 pb-40">
            
            {/* company  */}
            <div className="flex flex-col items-center space-y-4">
                <div className="bg-white rounded-full border-8 border-indigo-900">
                    <img src={data?.company?.image} alt={data?.company?.name} className='w-40 h-40 '/>
                </div>
                <div className='flex flex-col items-center space-y-0.5 text-center'>
                    <h5>{data?.title}</h5>
                    <h6 className="font-medium">{data?.location}</h6>
                </div>
            </div>

            {/* job details */}
            <div className="flex flex-col space-y-8">

                {/* main details */}
                <div className='flex justify-between px-4'>
                    <DetailsIcon icon={<FaRegMoneyBillAlt className='w-7 h-7'/>} heading='Salary' value={data?.salary+'/Mo'}/>
                    <DetailsIcon icon={<RiTimerLine className='w-7 h-7'/>} heading='Type' value={data?.type}/>
                    <DetailsIcon icon={<MdOutlineDateRange className='w-7 h-7'/>} heading='Last Date' value={data?.last_date}/>
                </div>

                <div className='flex flex-col space-y-4'>
                    {/* description */}
                    <div className='flex flex-col px-4 space-y-1'>
                        <h5 className='font-bold'>Description</h5>
                        <p className='break-all text-base'>{`
                            ${data?.description}
                            `}</p>
                    </div>

                    {/* Other Details */}
                    <div className='flex flex-col px-4 space-y-1'>
                        <div className='flex space-x-3 items-center'>
                            <h6 className='font-bold'>Education</h6>
                            <span className='font-bold text-lg'>:</span>
                            <h6 className='text-base font-normal'>{data?.education?.join(', ')}</h6>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <h6 className='font-bold'>Key Skills</h6>
                            <span className='font-bold text-lg'>:</span>
                            {data?.key_skills.map((item) =>
                                <h6 key={item} className='text-base font-medium text-white rounded-full px-4 bg-indigo-600'>{item}</h6>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
