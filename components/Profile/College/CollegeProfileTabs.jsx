import { useState } from 'react'

import Spaces from '@/components/Posts/Spaces'
import StudentCardSmall from '@/components/Cards/Student/StudentCardSmall'

export default function CollegeProfileTabs({studentsData, about}) {

    const [active, setactive] = useState('spaces')

    return (
        <div className='flex flex-col'>

            {/* tab menu */}
            <div className='flex justify-between items-center bg-zinc-900 h-14 rounded-2xl  border-2 border-indigo-600 text-white '>
                <div className={` h-14 flex items-center justify-center w-1/2 rounded-2xl rounded-r-none 
                    text-xl font-bold ${active == 'spaces' && 'text-white bg-indigo-600'}`}
                    onClick={()=>setactive('spaces')}>
                    Spaces
                </div>
                <div className={`h-14 flex items-center justify-center w-1/2 
                    text-xl font-bold  ${active == 'students' && 'bg-indigo-600 text-white'}`}
                    onClick={()=>setactive('students')}>
                    Students
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
                                [1,2,3,5,7,8,9,6].map((item)=>
                                <Spaces key={item} name='GECW' content='ssssssssss' time='2022-04-05'/> )
                            } 
                        </div> :

                    active == 'students' ? 
                        <div className='grid grid-cols-2 pt-3 gap-2 place-items-center w-full'>
                            {
                                studentsData?.map((student)=>
                                    <StudentCardSmall name={student.name} studentId={student.id}/> )
                            }
                        </div> :

                    active == 'about' &&
                        <div className='flex flex-col px-4 space-y-1 pt-3  '>
                            <p className='break-all text-base'>{`
                                ${about}
                            `}</p>
                        </div>
                }
            </div>

        </div>
    )
}
