import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { registration } from "@/constants/form.const";
import { signUp } from "services/auth.service";

import Registration from "@/components/Auth/Registration";
import { MdOutlineArrowBack } from "react-icons/md";


export default function Register() {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
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

    return (
        <div className="flex flex-col justify-center items-center space-y-4 py-12
            bg-gradient-to-bl from-cyan-600 via-indigo-900 to-rose-900 min-h-screen">
 
            <h4>placigo</h4>
            
            {/* registeration  */}
            <div className="bg-zinc-900 w-84 rounded-2xl shadow-md shadow-zinc-900 border border-rose-700
                flex flex-col items-center space-y-4 pt-4 pb-6 px-4">
                <div className="flex justify-center items-center relative w-full">
                    <MdOutlineArrowBack className='w-6 h-6 absolute left-0' onClick={()=> router.push('/signup')}/>
                    <h5> Registration </h5>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
                    <Registration values={router.query.user == 'student' ? registration.student : 
                        router.query.user == 'company' ? registration.company : router.query.user == 'college' ? registration.college : null} 
                        register={register} errors={errors}/>
                    <button className='sbmt w-76' type='submit'>
                        {loading ? 'Saving...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    )
}
