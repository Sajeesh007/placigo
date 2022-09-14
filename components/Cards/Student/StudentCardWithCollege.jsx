import { useRouter } from "next/router"


export default function StudentCardWithCollege({data}) {

    const router = useRouter()

    const handleRouting = () => {
        router.push(`/company/college/${data?.college?.id}/student/${data?.id}`)
    }

    return (
        <div className='flex justify-between px-6 items-center rounded-3xl grdnt-indigo h-20 w-full'>
            <div className='flex items-center space-x-2'>
                <div className='bg-white w-14 h-14 rounded-full'/>
                <div className='flex flex-col'>
                    <h6>{data?.name}</h6>
                    <p>{data?.college?.name}</p>
                </div>
            </div>
            <button className='flex justify-center items-center bg-white py-2 px-4 rounded-2xl text-indigo-600 font-bold' 
                onClick={handleRouting}>
                View
            </button>
        </div>
    )
}
