import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getCompanyById } from 'services/company.service'
import { geJobsByCompanyId } from 'services/job.service'
import { getSpacesByCompanyId } from '@/services/space.service'

import { MdOutlineArrowBack } from 'react-icons/md'

import StudentLayout from '@/modules/Layout/StudentLayout'
import CompanyProfile from '@/components/Profile/Company/CompanyProfile'
import CompanyProfileTabs from '@/components/Profile/Company/CompanyProfileTabs'

export default function StudentCompanyIdPage() {

    const router = useRouter()

    const [spaceData, setspaceData] = useState(null)
    const [jobsData, setjobsData] = useState(null)
    const [companyData, setcompanyData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    const getData =  async () => {
        await getCompanyById({id: router?.query?.companyId, setcompanyData: setcompanyData, seterror: seterror, setloading: setloading})
        await geJobsByCompanyId({id: router?.query?.companyId, setjobsData: setjobsData, seterror: seterror, setloading: setloading})
        await getSpacesByCompanyId({id: router?.query?.companyId, setspaceData: setspaceData, setloading: setloading, seterror: seterror})
    }
    useEffect(() => {
      router.isReady && getData()
    }, [router.isReady])

    return (
        <div className='flex flex-col'>

            {/* content */}
            <CompanyProfile data={companyData} jobCount={jobsData?.length}/>

            {/* tabs for spaces and students */}
            <div className='px-4 pt-4'>
                <CompanyProfileTabs jobData={jobsData} spaceData={spaceData} companyData={companyData}/>
            </div>

        </div>
    )
}

StudentCompanyIdPage.getLayout = function getLayout(page) {
    return (
      <StudentLayout headerX={{back: '/student/jobs'}}
      notShowFooter={true} notShowHeader={true}>
        {page}
      </StudentLayout>
    )
}
