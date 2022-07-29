import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { signUp } from "services/auth.service";
import { getCollegeDropDownData } from "libs/form.helper";

import { MdOutlineArrowBack } from "react-icons/md";

import StudentRegistration from "@/components/Auth/StudentRegistration";
import CompanyRegistration from "@/components/Auth/CompanyRegistration";
import CollegRegistration from "@/components/Auth/CollegeRegistration";
import Portal from "@/modules/Layout/Portal";
import Confirmation from "@/components/Auth/Confirmation";


export default function Register() {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)
    const [collegeData, setcollegeData] = useState(null)

    const onSubmit = async (data) => {
        if(router.query.user == 'student'){
            const collegeId = collegeData.filter((item)=> item.name == data.college)
            data.college = collegeId[0].id
        }
        await signUp({
            email: data.email,
            password: data.password,
            data: data,
            role: router.query.user,
            setsuccess: setsuccess,
            seterror: seterror,
            setloading: setloading
        })
    }


    useEffect(() => {
        const getDropDown = async () => {
            const {data, error} = await getCollegeDropDownData()
            !error && setcollegeData(data)
        }
        (router.isReady && router.query.user == 'student') && getDropDown()
    }, [router.isReady])
    

    const redirect = () => {
        router.replace(`/${router.query.user}`)
    }

    return (
        <div className={`flex flex-col justify-center items-center space-y-4 py-12 relative
            bg-gradient-to-bl from-cyan-600 via-indigo-900 to-rose-900 min-h-screen text-white
            ${ (success || error) && 'blur-sm '}`}>
 
            <h4>placigo</h4>
            
            {/* registeration  */}
            <div className="bg-zinc-900 w-84 rounded-2xl shadow-md shadow-zinc-900 border border-rose-700
                flex flex-col items-center space-y-4 pt-4 pb-6 px-4">
                <div className="flex justify-center items-center relative w-full">
                    <MdOutlineArrowBack className='w-6 h-6 absolute left-0' onClick={()=> router.push('/signup')}/>
                    <h5> Registration </h5>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
                    {
                        router.query.user == 'student' ? 
                            <StudentRegistration collegeData={collegeData?.map((item)=>item.name)} register={register} errors={errors}/> :
                        router.query.user == 'company' ? 
                            <CompanyRegistration register={register} errors={errors}/> :
                        router.query.user == 'college' ? 
                            <CollegRegistration register={register} errors={errors}/> :
                        null      
                    }
                    <button className='sbmt w-76' type='submit'>
                        {loading ? 'Saving...' : 'Register'}
                    </button>
                </form>
            </div>

            { success && 
                <Portal>
                    <Confirmation type='success' message='You have registerd successfully' 
                    redirect={redirect}/>
                </Portal> 
            }
            { error && 
                <Portal>
                    <Confirmation type='error' message='Oops! something went wrong' 
                    redirect={redirect}/>
                </Portal> 
            }
        </div>
    )
}
