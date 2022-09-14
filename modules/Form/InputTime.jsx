import { useState } from "react"

import FormError from "./FormError";

export default function InputTime({label, htmlFor, error, register}) {

    const [inputType, setinputType] = useState('text')

    return(
        <div className="flex flex-col space-y-4  text-white">


            <div className="flex relative justify-center items-center">
                <input type={inputType} placeholder={label} {...register(htmlFor, { required: 'This field is required' })}
                    className={` bg-transparent border border-white  outline-none focus:border-blue-600
                    rounded-xl px-3 w-76 h-11 placeholder-zinc-500 ${error && 'border-rose-600'}`}
                  onFocus={()=>setinputType('time')} onBlur={()=>setinputType('text')}
                />
                {error && <FormError error={error?.message}/>}
            </div>

        </div>
      )
}
