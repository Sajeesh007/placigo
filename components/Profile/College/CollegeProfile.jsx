import { MdOutlineSchool } from 'react-icons/md'
import { RiHandbagLine, RiStarLine } from 'react-icons/ri'
import ProfileDetailsIcon from '@/components/Profile/ProfileDetailsIcon'

export default function CollegeProfile({data, studentCount}) {
    
    return (
        <div className="flex flex-col items-center pt-2 space-y-4">
            
            {/* College Profile  */}
            <div className="flex flex-col items-center space-y-3">
                <img src={data?.profile_url} alt={data?.name} className='w-40 h-40 rounded-full border-8 border-indigo-800'/>
                <div className='flex flex-col'>
                    <h5>{data?.name}</h5>
                    <h6 className="font-medium text-zinc-400">{data?.city}</h6>
                </div>
            </div>

            {/* job details */}
            <div className="flex flex-col space-y-8">

                {/* main details */}
                <div className='flex justify-center space-x-16 items-center'>
                    <ProfileDetailsIcon icon={<MdOutlineSchool className='w-7 h-7'/>} heading='Students' value={studentCount}/>
                    <ProfileDetailsIcon icon={<RiHandbagLine className='w-7 h-7'/>} heading='Placements' value={'0'}/>
                    <ProfileDetailsIcon icon={<RiStarLine className='w-7 h-7'/>} heading='Rank' value={'0'}/>
                </div>

            </div>
        </div>
    )
}
