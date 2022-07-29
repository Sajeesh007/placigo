import Link from "next/link";

import Title from "@/components/Auth/Title"


export default function RegisterPage() {
  return (
    <div className='flex flex-col justify-between bg-gradient-to-bl from-cyan-600 via-indigo-900 to-rose-900 
        h-screen w-screen pt-12'>
        
        {/* title with motto */}
        <Title/>

        {/* signup button  */}
        <div className='flex flex-col justify-center items-center space-y-4 py-8  bg-zinc-900 rounded-t-2xl'>
            <div className='flex flex-col space-y-4'>
                <Link href='/register/student'>
                    <button className="btn-1">Register as student</button>
                </Link>
                <Link href='/register/college'>
                    <button className="btn-1">Register as college</button>
                </Link>
                <Link href='/register/company'>
                    <button className="btn-1">Register as company</button>
                </Link>
            </div>
            {/* signup button  */}
            <div>
                <Link href='/login'>
                    <p className='font-medium text-white'>Already Have An Account? Login now</p>
                </Link>
            </div>
        </div>
    </div>
  )
}
