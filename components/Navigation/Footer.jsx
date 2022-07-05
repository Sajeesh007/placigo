import Link from "next/link";
import { MdOutlineNotifications } from "react-icons/md";
import {  RiHome2Line, RiStarLine } from "react-icons/ri";
import { TbMessageCircle } from "react-icons/tb";

export default function Footer() {
  return (
    <div className='flex justify-between items-center  text-white rounded-t-3xl bg-zinc-800 
      h-16 px-4 fixed w-full bottom-0 z-50'>

        <div className="flex justify-between items-center w-full">
          <Link href='/student'>
            <RiHome2Line className={`w-7 h-7 text-white `} />
          </Link>
          <Link href='/student/ranking'>
            <RiStarLine className={`w-7 h-7 text-white fill-white`}/>
          </Link>
          <TbMessageCircle className="w-7 h-7 text-white"/>
          <MdOutlineNotifications className={`w-7 h-7 text-white `}/>
        </div>

    </div>
  )
}
