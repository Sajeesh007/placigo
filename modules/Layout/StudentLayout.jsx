// import { useEffect } from "react";
import { useRouter } from "next/router"

// import { supabase } from "supabse";

import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header"
import HeaderX from "@/components/Navigation/HeaderX";


export default function StudentLayout({children, notShowHeader, notShowFooter, headerX}) {


  const router = useRouter()

  // useEffect(() => {
  //   const user = supabase.auth.user()
  //   !user && user?.user_metadata?.role !== 'student' && router.push('/login')
  // }, [])

  return (
    <div className='flex flex-col bg-zinc-900 text-white relative min-h-screen'>
        { notShowHeader ? 
        <HeaderX close={headerX?.close} back={headerX?.back} edit={headerX?.edit} title={headerX?.title}/> 
      :  
        <Header/> }
      <div className="relative z-10">
        {children}
      </div>
      { !notShowFooter && <Footer /> }
    </div>
  )
}
