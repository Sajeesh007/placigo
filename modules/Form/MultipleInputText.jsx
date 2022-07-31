import { HiPlus } from "react-icons/hi";
import FormError from "./FormError";

export default function MultipleInputText({label, htmlFor, error, register, setValue}) {


    return(
        <div className="flex flex-col space-y-4  text-white">
            <div className="flex relative justify-center items-center" >
                <input type='text' placeholder={label} {...register(htmlFor, { required: 'This field is required' })}
                    className={` bg-transparent border border-white  outline-none focus:border-blue-600
                    rounded-xl px-3 w-76 h-11 placeholder-zinc-500 ${error && 'border-rose-600'}`}
                    multiple={true}/>
                <div className="absolute right-0 bg-blue-600 h-11 w-12 rounded-r-xl flex justify-center items-center" 
                    onClick={()=>setValue(htmlFor, "Bill")}>
                    <HiPlus className="w-6 h-6  "/>
                </div>
                {error && <FormError error={error?.message}/>}
            </div>
        </div>
      )
}
