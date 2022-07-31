import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { useAuthContext } from "@/store/Context"
import { getStudentProfile, updateProfilePic, updateStudentProfile } from "services/profile.service"

import InputList from "@/components/List/InputList"
import StudentLayout from "@/modules/Layout/StudentLayout"

export default function Profile() {

    const { user } = useAuthContext()

    const { register, handleSubmit, formState: { errors },reset } = useForm({
        defaultValues: user?.user_metadata
    })

    const [editClicked, seteditClicked] = useState(false)

    const [profileData, setprofileData] = useState(null)
    const [error, seterror] = useState(false)
    const [success, setsuccess] = useState(false)
    const [loading, setloading] = useState(false)

    useEffect(() => {
      getStudentProfile({id:user?.id, setprofileData: setprofileData, seterror: seterror, setloading: setloading}) 
    }, [user])

    useEffect(() => {
        reset(profileData)
    }, [profileData]);


    const onSubmit = async (data) => {
        delete data.college_name
        delete data.college_id
        data.college = profileData.college_id
        await updateStudentProfile({id:user?.id, data: data, setsuccess: setsuccess, seterror: seterror, setloading: setloading})
        seteditClicked(false)
    }

    // const updateProfileImage = async (e) => {
    //     await updateProfilePic({bucket: 'student-profile', name: `${user?.id}`, file: data?.profile_pic[0]})
    // }


    return (
        <div className='flex flex-col space-y-4 items-center pt-4 pb-20 bg-zinc-900'>

            <div className='flex justify-center items-center text-white
             bg-gradient-to-tr from-indigo-700 to-indigo-400 
            w-40 h-40 rounded-full shadow-lg shadow-indigo-700'>
                <h3>{user?.user_metadata.name?.substring(0,2)?.toUpperCase()}</h3>
            </div>

            {/* <form onSubmit={handleSubmit(updateProfileImage)}>
                <input type='file' accept=".jpg, .jpeg, .png"  id='profile_pic'/>
                <input type='submit' />
            </form> */}


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
                <div className='flex justify-between items-center text-white'>
                    <h4>Details</h4>
                    { !editClicked ? 
                        <button className='grdnt-btn-primary px-6 h-10'
                             onClick={()=>seteditClicked(true)}>
                            Edit
                        </button> :
                        <div className='flex space-x-2'>
                            <button className='btn-primary px-6 h-10'
                                type='submit'>
                                {loading ? 'Saving...' :'Save'}
                            </button>
                            <button className='btn-cancel px-6 h-10'
                                onClick={()=>seteditClicked(false)}>
                                Cancel
                            </button>
                        </div>
                    }
                </div>

                <div className='flex flex-col'>
                    <InputList values={[
                        {label: 'Name', htmlFor:'name', type:'text', disable: true},
                        {label: 'Gender', htmlFor:'gender', type:'text', disable: true},
                        {label: 'Date of Birth', htmlFor:'dob', type:'date', disable: true},
                        {label: 'College', htmlFor:'college_name', type:'text', disable: true},
                        {label: 'Course', htmlFor:'course', type:'text', disable: true},
                        {label: 'Specialization', htmlFor:'specialization', type:'text', disable: true},
                        {label: 'Street', htmlFor:'street', type:'text', disable: false},
                        {label: 'City', htmlFor:'city', type:'text', disable: false},
                        {label: 'District', htmlFor:'district', type:'text', disable: false},
                        {label: 'Pincode', htmlFor:'pincode', type:'number', disable: false},
                        {label: 'Email', htmlFor:'email', type:'email', disable: true},
                        {label: 'Phone Number', htmlFor:'mobile', type:'tel', disable: false},
                    ]} register={register} errors={errors}
                    edit={editClicked} />
                </div>
            </form>
            
        </div>
    )
}

Profile.getLayout = function getLayout(page) {
    return (
      <StudentLayout>
            {page}
      </StudentLayout>
    )
  }