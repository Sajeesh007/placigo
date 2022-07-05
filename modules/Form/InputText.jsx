import { useState } from "react"

import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md"
import FormError from "./FormError";

export default function InputText({label, htmlFor, type, error, register}) {

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
        <div className="flex flex-col space-y-4  text-white">

            <div className="flex relative justify-center items-center">
                <input type={inputType} placeholder={label} {...register(htmlFor, { required: 'This field is required' })}
                    className={` bg-transparent border border-white  outline-none focus:border-blue-600
                    rounded-xl px-3 w-76 h-11 placeholder-zinc-500 ${error && 'border-rose-600'}`}
                    />
                {(showPassword && type =='password' && !error) ?
                    <MdOutlineVisibilityOff className='absolute right-4 w-6 h-6' onClick={handlePassword}/>
                    : (type == 'password' && !error) &&
                    <MdOutlineVisibility className='absolute right-4 w-6 h-6' onClick={handlePassword}/>
                }
                {error && <FormError error={error?.message}/>}
            </div>

        </div>
      )
}
