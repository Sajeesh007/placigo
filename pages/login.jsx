import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';

import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

import InputText from '@/modules/Form/InputText'
import Title from '@/components/Auth/Title'

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='flex flex-col justify-between bg-gradient-to-bl from-cyan-600 via-indigo-900 to-rose-900 
            h-screen w-screen pt-12'>
            
            {/* title with motto */}
            <Title/>

            {/* login button  */}
                <div className='flex flex-col justify-center items-center space-y-4 px-6 bg-zinc-900 py-8 rounded-t-2xl '>
                    
                    <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
                        <InputText type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
                        <InputText type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
                        <Link href='/reset-password'>
                            <p className=" text-right px-2">Forgot Password?</p>
                        </Link>
                        <button className='sbmt' type='submit'>
                            Login
                        </button>
                    </form>
                    {/* signup button  */}
                    <Link href='/student'>
                        <p className='font-medium text-white'>New User? Register now</p>
                    </Link>
                </div>
            
        </div>
    )
}
