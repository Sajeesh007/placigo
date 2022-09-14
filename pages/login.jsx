import { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useForm } from 'react-hook-form';

import { signIn } from 'services/auth.service';

import InputText from '@/modules/Form/InputText'
import Title from '@/components/Auth/Title'

export default function Login() {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
        seterror(false)
        await signIn({
            email: data.email, 
            password: data.password, 
            setsuccess: setsuccess,
            seterror: seterror,
            setloading: setloading,
            router: router,
        })
    }

    return (
        <div className='flex flex-col justify-between bg-gradient-to-bl from-cyan-600 via-indigo-900 to-rose-900 
            h-screen w-screen pt-12'>
            
            {/* title with motto */}
            <Title/>

            {/* login button  */}
                <div className='flex flex-col justify-center items-center space-y-4 px-6 bg-zinc-900 py-8 rounded-t-2xl '>
                    
                    <form className='flex flex-col space-y-4 items-center' onSubmit={handleSubmit(onSubmit)}>
                        <InputText type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
                        <InputText type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
                        {/* <Link href='/reset-password'>
                            <p className=" text-right px-2 text-white">Forgot Password?</p>
                        </Link> */}
                        {error && <p className='text-rose-600'>Invalid email address or email and password does not match</p> }
                        <button className='sbmt' type='submit'>
                            {loading ? 'Loading...': 'Login'}
                        </button>
                    </form>
                    {/* signup button  */}
                    <Link href='/register'>
                        <p className='font-medium text-white'>New User? Register now</p>
                    </Link>
                </div>
            
        </div>
    )
}
