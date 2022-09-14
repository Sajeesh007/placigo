import { MdOutlineDateRange, MdOutlineLocationOn } from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'

import DetailsIcon from '@/components/List/DetailsIcon'

export default function NotificationContent({data}) {
    
    return (
        <div className="flex flex-col items-center space-y-8 pb-20 ">
            
            {/* notification heading  */}
            <div className="flex flex-col items-center justify-center space-y-1">
                <h5 className='text-center break-words w-screen'>{data?.title}</h5>
                <h6 className="font-medium">{data?.type}</h6>
            </div>

            {/*  details */}
            <div className="flex flex-col space-y-8">

                {/* main details */}
                <div className='flex space-x-10 justify-center'>
                    <DetailsIcon icon={<MdOutlineLocationOn className='w-7 h-7'/>} heading='Location' value={data?.organizer?.location}/>
                    <DetailsIcon icon={<BsPeople className='w-7 h-7'/>} heading='Organizer' value={data?.organizer?.name}/>
                    <DetailsIcon icon={<MdOutlineDateRange className='w-7 h-7'/>} heading='Date' value={data?.date}/>
                </div>

                {/* description */}
                <div className='flex flex-col space-y-2'>
                    <h5 className='font-bold pl-3'>Description</h5>
                    <ul className='flex flex-col space-y-2 list-disc w-screen pl-12 pr-3' >
                        {data?.content?.description?.map((item, index) => 
                            <li key={index} className='break-words '>{item}</li>
                        )}
                    </ul>
                </div>

                <div className='flex px-3 items-center'>
                    <h6>{data?.content?.link_text} : </h6>
                    <a href={data?.content?.link_url} target="blank" className='text-indigo-500 pl-2'>
                        {data?.content?.link_url?.length > 25 ? data?.content?.link_url?.substring(0,25) + '...' : data?.content?.link_url}
                    </a>
                </div>
            </div>

            
        </div>
    )
}
