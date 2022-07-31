import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getCollegeById } from 'services/college.service'
import { getStudentsByCollege } from 'services/student.service'

import { MdOutlineArrowBack } from 'react-icons/md'

import CompanyLayout from '@/modules/Layout/CompanyLayout'
import CollegeProfile from '@/components/Profile/College/CollegeProfile'
import CollegeProfileTabs from '@/components/Profile/College/CollegeProfileTabs'

export default function CollegeIdPage() {

    const router = useRouter()

    // const [spacesData, setspacesData] = useState(null)
    const [studentsData, setstudentsData] = useState(null)
    const [collegeData, setcollegeData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)


    console.log(router);

    const getData =  async () => {
        await getCollegeById({id: router?.query?.collegeId, setcollegeData: setcollegeData, seterror: seterror, setloading: setloading})
        await getStudentsByCollege({id: router?.query?.collegeId, setstudentsData: setstudentsData, seterror: seterror, setloading: setloading})
    }
    useEffect(() => {
      router?.query?.collegeId && getData()
    }, [router.isReady])
    

    return (
        <div className='flex flex-col'>

            {/* header */}
            <div className="sticky w-screen h-16 flex justify-center items-center px-3 pt-4">
                <MdOutlineArrowBack className='w-8 h-8 text-white absolute left-3' onClick={()=>router.push('/company/colleges')}/>
                <h6>ss</h6>
            </div>

            {/* content */}
            <CollegeProfile data={collegeData} studentCount={studentsData?.length}/>

            {/* tabs for spaces and students */}
            <div className='px-4 pt-4'>
                <CollegeProfileTabs studentsData={studentsData} about={collegeData?.about}/>
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
