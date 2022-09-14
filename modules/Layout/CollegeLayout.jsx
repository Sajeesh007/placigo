// import { useEffect } from "react";
import { useRouter } from "next/router"

// import { useAuthContext } from "store/Context";

import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header"
import HeaderX from "@/components/Navigation/HeaderX";


export default function CollegeLayout({children, notShowHeader, notShowFooter, headerX}) {

  const router = useRouter()

  // useEffect(() => {
  //   user?.user_metadata?.role !== 'college' && router.push('/login')
  // }, [user])


  return (
    <div className='flex flex-col bg-zinc-900 text-white relative min-h-screen'>

      { notShowHeader ? 
        <HeaderX close={headerX?.close} back={headerX?.back} edit={headerX?.edit} title={headerX?.title}/> 
      :  
        <Header/> }

      <div className="relative z-10">
        {children}
      </div>
      
      {!notShowFooter && <Footer />}
    </div>
  )
}
