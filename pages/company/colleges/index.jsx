import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getColleges } from 'services/college.service'

import CompanyLayout from "@/modules/Layout/CompanyLayout"
import CollegeCard from '@/components/Cards/College/CollegeCard'

export default function CollegesPage() {

    const router = useRouter()

    const [collegesData, setcollegesData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
        getColleges({setcollegesData: setcollegesData, seterror: seterror, setloading: setloading})
    }, [])

    const handleViewDetails = (id) => {
        router.push(`/company/colleges/${id}`)
    }

    return (
        <div className="flex flex-col space-y-4 p-4">
            <div className='flex justify-between items-center'>
            <h5>Colleges</h5>
            </div>

            {/* job card */}
            { loading ?
            <div className='flex flex-col space-y-4'>
                {[1,2,3,4,5,6,7,8,9].map((item)=> <div key={item} className='w-full bg-zinc-700 animate-pulse h-20 rounded-3xl'/>)} 
            </div> :
            <div className='flex flex-col space-y-6 pb-4'>
                { collegesData?.map((college)=> 
                    <CollegeCard key={college.id} id={college.id} name={college.name} city={college.city}
                        handleRouting={handleViewDetails} />
                )}
            </div>
            }

        </div>
    )
}

CollegesPage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout>
        {page}
      </CompanyLayout>
    )
}