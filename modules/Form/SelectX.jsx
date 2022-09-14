import { BsChevronDown } from "react-icons/bs";

export default function SelectX({label, name, register, values, error}){

  return(
    <div className="flex flex-col relative justify-center  text-white">
        <label className={`absolute top-2 px-3 font-semibold text-xs text-zinc-500`}>
          {label}
        </label>
        <select {...register(name)}
            className='bg-zinc-800 border border-transparent  outline-non 
            rounded-xl px-3 w-76 h-16 pt-4 focus:border-blue-600 text-white'>

            <option value='' selected hidden disabled>{label}</option>
            {values?.map((item)=> 
                <option key={item} value={item} >{item}</option>
            )}
        </select>
        <BsChevronDown className='w-4 h-4 absolute right-3'/>
    </div>
  )
}
