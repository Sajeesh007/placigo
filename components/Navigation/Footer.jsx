import Link from "next/link";
import { BiListUl } from "react-icons/bi";
import { MdOutlineNotifications, MdOutlineSchool } from "react-icons/md";
import {  RiAccountCircleLine, RiHandbagLine, RiHome2Line, RiStarLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className='flex justify-between items-center  text-white rounded-t-3xl bg-zinc-800 
      h-16 px-4 fixed w-full bottom-0 z-50 '>

        <div className="flex justify-between items-center w-full">
          <Link href='/student'>
            <RiHome2Line className={`w-7 h-7 text-white `} />
          </Link>
          <Link href='/student/jobs'>
            <RiHandbagLine className={`w-7 h-7 text-white `}/>
          </Link>
          <Link href='/student/space'>
            <BiListUl className={`w-8 h-8 text-white `}/>
          </Link>
          <Link href='/student/college'>
            <MdOutlineSchool className={`w-8 h-8 text-white `}/>
          </Link>
          <Link href='/student/ranking'>
            <RiStarLine className={`w-7 h-7 text-white fill-white`}/>
          </Link>
        </div>

    </div>
  )
}
