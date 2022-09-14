import { MdOutlineSchool } from 'react-icons/md'
import { RiHandbagLine, RiStarLine } from 'react-icons/ri'
import DetailsIcon from '@/components/List/DetailsIcon'

export default function CollegeProfile({data, studentCount}) {
    
    return (
        <div className="flex flex-col items-center space-y-4">
            
            {/* College Profile  */}
            <div className="flex flex-col items-center space-y-3">
                <img src={data?.image} alt={data?.name} className='w-40 h-40 rounded-full border-8 border-indigo-800'/>
                <div className='flex flex-col text-center'>
                    <h5>{data?.name}</h5>
                    <h6 className="font-medium text-zinc-400">{data?.city}</h6>
                </div>
            </div>

            {/* main details */}
            <div className='flex justify-between px-4  items-center w-full'>
                <DetailsIcon icon={<MdOutlineSchool className='w-7 h-7'/>} heading='Students' value={studentCount}/>
                <DetailsIcon icon={<RiHandbagLine className='w-7 h-7'/>} heading='Placements' value={'0'}/>
                <DetailsIcon icon={<RiStarLine className='w-7 h-7'/>} heading='Rank' value={'0'}/>
            </div>

        </div>
    )
}
