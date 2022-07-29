import { useState } from "react"

import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header"


export default function StudentLayout({children}) {


  return (
    <div className='flex flex-col bg-zinc-900 text-white relative min-h-screen'>
      <Header/>
      <div className="relative z-10">
        {children}
      </div>
      <Footer />
    </div>
  )
}
