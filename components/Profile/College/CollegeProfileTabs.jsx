import { useState } from 'react'
import { useRouter } from 'next/router'

import Spaces from '@/components/Cards/Space/Spaces'
import StudentCardSmall from '@/components/Cards/Student/StudentCardSmall'
import CollegeAbout from '@/components/List/CollegeAbout'

export default function CollegeProfileTabs({studentsData, collegeData, spaceData}) {

    const router = useRouter()

    const [active, setactive] = useState('spaces')

    const handleRouting = (id) => {
        router.push(`${router.asPath}/student/${id}`)
    }

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
                            spaceData?.map((item)=>
                                <Spaces data={item} key={item?.id} /> )
                        } 
                        </div> :

                    active == 'students' ? 
                        <div className='grid grid-cols-2 pt-3 gap-2 place-items-center w-full'>
                            {
                                studentsData?.map((student)=>
                                    <StudentCardSmall name={student.name} course={student.course} studentId={student.id}
                                        handleRouting={handleRouting}/> )
                            }
                        </div> :

                    active == 'about' &&
                        <CollegeAbout data={collegeData} />
                }
            </div>

        </div>
    )
}
