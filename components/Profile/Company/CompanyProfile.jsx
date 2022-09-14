import { MdWorkOutline } from 'react-icons/md'
import { RiHandbagLine } from 'react-icons/ri'

import DetailsIcon from '@/components/List/DetailsIcon'

export default function CompanyProfile({data, jobCount}) {
    
    return (
        <div className="flex flex-col items-center space-y-4">
            
            {/* Company Profile  */}
            <div className="flex flex-col items-center space-y-3">
                <img src={data?.image} alt={data?.name} className='w-40 h-40 rounded-full bg-white border-8 border-indigo-800'/>
                <div className='flex flex-col text-center'>
                    <h5>{data?.name}</h5>
                    <h6 className="font-medium text-zinc-400">{data?.college?.name}</h6>
                </div>
            </div>


            {/* main details */}
            <div className='flex justify-between w-full px-16 items-start'>
                <DetailsIcon icon={<MdWorkOutline className='w-7 h-7'/>} heading='Job Offers' value={jobCount || 'NA'}/>
                <DetailsIcon icon={<RiHandbagLine className='w-7 h-7'/>} heading='Total Placements' value={'NA'}/>
            </div>

        </div>
    )
}
