import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { useAuthContext } from "@/store/Context"
import { logout } from "@/services/auth.service"
import { getStudentProfile, updateStuddentProfile } from "@/services/profile.service"

import StudentLayout from "@/modules/Layout/StudentLayout"
import StudentProfileEdit from "@/components/Profile/Student/StudentProfileEdit"

export default function ProfileStudent() {

    const { user } = useAuthContext()

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [profileData, setprofileData] = useState(null)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        user?.id && getStudentProfile({id:user?.id, setprofileData: setprofileData, seterror: seterror}) 
    }, [user])

    useEffect(() => {
        reset(profileData)
    }, [profileData]);

    const onSubmit = async (data) => {
        await updateStuddentProfile({id:user?.id, data: data, seterror: seterror, setloading: setloading})
    }

    return (
        <div className='flex flex-col space-y-4 items-center pt-4 pb-20 bg-zinc-900'>

            {profileData?.image ?
                <img className='w-40 h-40 rounded-full border-4 border-indigo-800' src={profileData?.image} alt='profile_image'/> :
                <div className='flex justify-center items-center text-white
                bg-gradient-to-tr from-indigo-700 to-indigo-400 
                w-40 h-40 rounded-full shadow-lg shadow-indigo-700'>
                    <h3>{user?.user_metadata.name?.substring(0,2)?.toUpperCase()}</h3>
                </div>
            }


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
                <div className='flex justify-between items-center text-white'>
                    <h4>Details</h4>
                    <button className='btn-primary px-6 h-10'
                        type='submit'>
                        {loading ? 'Saving...' :'Save'}
                    </button>
                </div>

                <StudentProfileEdit register={register} errors={errors}/> 
        
            </form>

            <button className="btn-cancel px-6 h-11" onClick={async ()=> await logout({router: router})}>
                Logout
            </button>

            
        </div>
    )
}

ProfileStudent.getLayout = function getLayout(page) {
    return (
      <StudentLayout>
            {page}
      </StudentLayout>
    )
  }