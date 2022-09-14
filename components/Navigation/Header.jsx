import { useEffect } from "react";
import { useRouter } from "next/router"

import { useAuthContext } from "store/Context";

import { RiAccountCircleLine } from "react-icons/ri";
import {  BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";

import IconItem from "./IconItem";

export default function Header() {

  const { user } = useAuthContext()

  const router = useRouter()

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch(`/${user?.user_metadata?.role}/notifications`)
    router.prefetch(`/${user?.user_metadata?.role}/profile`)
  }, [router.isReady])

  return (
    <div className='flex justify-between border-b border-zinc-700 bg-zinc-900 items-center py-6 text-white 
      h-16 px-4 sticky top-0 z-50 '>
          <h5>placigo</h5>
          <div className="flex items-center space-x-5">
            <IconItem icon={<RiAccountCircleLine className={`w-7 h-7 text-white`}/>} handleRouting={()=>router.push(`/${user?.user_metadata?.role}/profile`)}/>
          </div>
    </div>
  )
}
