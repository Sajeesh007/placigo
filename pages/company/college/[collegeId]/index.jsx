import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getCollegeById } from '@/services/college.service'
import { getStudentsByCollege } from '@/services/student.service'
import { getSpacesByCollegeId } from '@/services/space.service'

import { MdOutlineArrowBack } from 'react-icons/md'

import CompanyLayout from '@/modules/Layout/CompanyLayout'
import CollegeProfile from '@/components/Profile/College/CollegeProfile'
import CollegeProfileTabs from '@/components/Profile/College/CollegeProfileTabs'

export default function CollegeIdPage() {

    const router = useRouter()

    const [spaceData, setspaceData] = useState(null)
    const [studentsData, setstudentsData] = useState(null)
    const [collegeData, setcollegeData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    const getData =  async () => {
        await getCollegeById({id: router?.query?.collegeId, setcollegeData: setcollegeData, seterror: seterror, setloading: setloading})
        await getStudentsByCollege({id: router?.query?.collegeId, setstudentsData: setstudentsData, seterror: seterror, setloading: setloading})
        await getSpacesByCollegeId({id: router?.query?.collegeId, setspaceData: setspaceData, setloading: setloading, seterror: seterror})
    }
    useEffect(() => {
      router?.query?.collegeId && getData()
    }, [router.isReady])
    

    return (
        <div className='flex flex-col'>

            {/* header */}
            <div className="sticky w-screen h-14 flex justify-center items-center px-3 ">
                <MdOutlineArrowBack className='w-8 h-8 text-white absolute left-3' 
                onClick={()=>router.push('/company/college')}/>
            </div>

            {/* content */}
            <CollegeProfile data={collegeData} studentCount={studentsData?.length}/>

            {/* tabs for spaces and students */}
            <div className='px-4 pt-4'>
                <CollegeProfileTabs studentsData={studentsData} spaceData={spaceData} collegeData={collegeData}/>
            </div>

        </div>
    )
}

CollegeIdPage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout notShowFooter={true} notShowHeader={true}>
        {page}
      </CompanyLayout>
    )
}
