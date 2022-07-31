import {useRouter} from "next/router";
import { useEffect } from "react";


import { BiListUl } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import {  RiHandbagLine, RiHome2Line, RiStarLine } from "react-icons/ri";
import { useAuthContext } from "store/Context";

import IconItem from "./IconItem";

export default function Footer() {

  const {user} = useAuthContext()

  const router = useRouter()

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch(`/${user?.user_metadata?.role}`)
    router.prefetch(`/${user?.user_metadata?.role}/jobs`)
    router.prefetch(`/${user?.user_metadata?.role}/space`)
    router.prefetch(`/${user?.user_metadata?.role}/ranking`)
    if(user?.user_metadata?.role == 'student') router.prefetch(`/${user?.user_metadata}/college`)
    else if(user?.user_metadata?.role == 'college') router.prefetch(`/${user?.user_metadata?.role}/students`)
    else if(user?.user_metadata?.role == 'comapny') router.prefetch(`/${user?.user_metadata?.role}/colleges`)

  }, [router.isReady])
  
  return (
    <div className='flex justify-between items-center  text-white rounded-t-3xl bg-zinc-800 
      h-16 px-4 fixed w-full bottom-0 z-50 '>

        <div className="flex justify-between items-center w-full">
          <IconItem icon={<RiHome2Line className={`w-7 h-7 text-white `} />} handleRouting={()=>router.push(`/${user?.user_metadata?.role}`)}/>
          <IconItem icon={<RiHandbagLine className={`w-7 h-7 text-white `}/>} handleRouting={()=>router.push(`/${user?.user_metadata?.role}/jobs`)}/>
          <IconItem icon={<BiListUl className={`w-8 h-8 text-white `}/>} handleRouting={()=>router.push(`/${user?.user_metadata?.role}/space`)}/>
          <IconItem icon={<MdOutlineSchool className={`w-8 h-8 text-white `}/>} handleRouting={()=>router.push(
            user?.user_metadata?.role == 'student' ? '/student/college' : 
            user?.user_metadata?.role == 'college' ? '/college/students' :
            user?.user_metadata?.role == 'company' && '/company/colleges'
          )}/>
          <IconItem icon={<RiStarLine className={`w-7 h-7 text-white fill-white`}/>} handleRouting={()=>router.push(`/${user?.user_metadata?.role}/ranking`)}/>
        </div>

    </div>
  )
}
