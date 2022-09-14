import { useRouter } from "next/router"

// import { useEffect } from "react";
// import { useAuthContext } from "store/Context";

import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header"


export default function CompanyLayout({children, notShowHeader, notShowFooter}) {

  // const { user } = useAuthContext()

  const router = useRouter()

  // useEffect(() => {
  //   (user && user?.user_metadata?.role !== 'company') && router.push('/login')
  // }, [user])

  return (
    <div className='flex flex-col bg-zinc-900 text-white relative min-h-screen'>
      { !notShowHeader &&  <Header/> }
      <div className="relative z-10">
        {children}
      </div>
      {!notShowFooter && <Footer />}
    </div>
  )
}
