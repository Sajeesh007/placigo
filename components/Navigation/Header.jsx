import Link from "next/link";

import { RiAccountCircleLine } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";

export default function Header() {
  return (
    <div className='flex justify-between border-b border-zinc-700 bg-zinc-900 items-center py-6 text-white 
      h-16 px-4 sticky top-0 z-50 '>
          <h5>placigo</h5>
          <div className="flex items-center space-x-5">
            <Link href='/student/chats'>
              <BiMessageRoundedDetail className={`w-7 h-7 text-white`}/>
            </Link>
            <Link href='/student/notifications'>
              <MdOutlineNotifications className={`w-7 h-7 text-white`}/>
            </Link>
            <Link href='/student/profile'>  
              <RiAccountCircleLine className={`w-7 h-7 text-white`}/>
            </Link>

          </div>
    </div>
  )
}
