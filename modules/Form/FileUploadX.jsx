import { useState } from "react"

import FormError from "./FormError";

export default function FileUploadX({label, htmlFor, error, register}) {

    return(
        <div className="flex flex-col relative justify-center  text-white">
            <label className={`absolute top-2 px-3 font-semibold text-xs text-zinc-500`}>
                {label}
            </label>
            <input type={'file'} placeholder={label} {...register(htmlFor)}
                className={` bg-zinc-800  border border-transparent  outline-none focus:border-blue-600
                rounded-xl px-3 w-76 h-16 pt-6 placeholder-zinc-500 ${error && 'border-rose-600'}`}
                
            />
            {error && <FormError error={error?.message}/>}

        </div>
      )
}
