import Spaces from "@/components/Cards/Space/Spaces"
import PostAdd from "@/components/Posts/PostAdd"
import Skelton from "@/components/Skelton/Skelton"
import CompanyLayout from "@/modules/Layout/CompanyLayout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getAllSpaces } from "services/space.service"

export default function SpaceCompanyPage() {

    const router = useRouter()

    const [spacesData, setspacesData] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
        getAllSpaces({setspacesData: setspacesData, seterror: seterror, setloading: setloading})
    }, [])

    return (
        <div className='page-top'>
            <div className='flex flex-col justify-center '>
                <h5>Space</h5>
                <p className="text-zinc-400">See What Others Doing</p>
            </div>
            { loading ?
                <Skelton height='h-28' size={[1,2,3,4,5]}/> :
                <div className='flex flex-col space-y-4 pb-4'>
                    { spacesData?.map((space)=> 
                        <Spaces key={space?.id} data={space}/>
                    )}
                </div>
            }
            
        </div>
    )
}

SpaceCompanyPage.getLayout = function getLayout(page) {
    return (
      <CompanyLayout>
        <PostAdd/>
        {page}
      </CompanyLayout>
    )
}
