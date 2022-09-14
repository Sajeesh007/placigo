import { useState } from 'react'

import Spaces from '@/components/Cards/Space/Spaces'
import StudentAbout from '@/components/List/StudentAbout'

export default function StudentProfileTabs({spaceData, studentData}) {


    const [active, setactive] = useState('spaces')


    return (
        <div className='flex flex-col pb-4'>

            {/* tab menu */}
            <div className='flex justify-between items-center bg-zinc-900 h-14 rounded-2xl  border-2 border-indigo-600 text-white '>
                <div className={` h-14 flex items-center justify-center w-1/2 rounded-2xl rounded-r-none 
                    text-xl font-bold ${active == 'spaces' && 'text-white bg-indigo-600'}`}
                    onClick={()=>setactive('spaces')}>
                    Spaces
                </div>
                <div className={`h-14 flex items-center justify-center w-1/2 rounded-2xl rounded-l-none
                    text-xl font-bold  ${active == 'about' && 'bg-indigo-600 text-white'}`}
                    onClick={()=>setactive('about')}>
                    About
                </div>
            </div>

            {/* details */}
            <div className='flex '>
                {   
                    active == 'spaces' ?
                        <div className='flex flex-col space-y-1 divide-y divide-zinc-500 w-full pt-3'>
                            {
                                spaceData?.map((item)=>
                                    <Spaces data={item} key={item?.id} /> )
                            } 
                        </div> :

                    active == 'about' &&
                        <StudentAbout data={studentData} />
                        
                }
            </div>

        </div>
    )
}
