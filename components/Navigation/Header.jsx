import { TbSearch } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import Searchbox from "@/modules/Form/SearchBox";

export default function Header() {
  return (
    <div className='flex flex-col py-6 text-white bg-indigo-600 rounded-b-3xl
      h-16 px-4 sticky top-0'>

        <div className="flex w-full justify-between items-center relative">
          <h5>placigo</h5>
          <div className="flex items-center space-x-6">
            <RiAccountCircleLine className={`w-7 h-7 text-white`}/>
          </div>
        </div>

        <div className="pt-6 relative">
          <Searchbox/>
        </div>

    </div>
  )
}
