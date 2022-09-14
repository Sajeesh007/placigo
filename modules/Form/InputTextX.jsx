import { useState } from "react"

import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md"
import FormError from "@/modules/Form/FormError";

export default function InputTextX({label, htmlFor, type, error, register, disabled}) {

    const [inputType, setinputType] = useState(type)
    const [showPassword, setshowPassword] = useState(false)

    const handlePassword = ()=>{
        if(inputType == 'text'){
          setinputType('password')
          setshowPassword(false)
        }else if(inputType == 'password'){
          setinputType('text')
          setshowPassword(true)
        }
      }

  return(
    <div className="flex flex-col relative justify-center  text-white">
        <label className={`absolute top-2 px-3 font-semibold text-xs text-zinc-500`}>
          {label}
        </label>
        <input type={inputType} placeholder={label} {...register(htmlFor)}
           disabled={disabled}
            className={` bg-zinc-800 border border-transparent outline-none focus:border-indigo-600
              flex pt-4 ${(disabled) && 'text-zinc-600'}
              rounded-xl px-3 w-76 h-16 placeholder-zinc-500 ${error && 'border-rose-600'} `}
            />
        {(showPassword && type =='password' && !error) ?
            <MdOutlineVisibilityOff className='absolute right-4 w-6 h-6' onClick={handlePassword}/>
            : (type == 'password' && !error) &&
            <MdOutlineVisibility className='absolute right-4 w-6 h-6' onClick={handlePassword}/>
        }
        {error && <FormError className={{icon:'bottom-3',text: 'bottom-0'}} error={error?.message}/>}

    </div>
  )
}
