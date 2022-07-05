import FormError from "./FormError";

export default function TextArea({label, htmlFor, error, register}) {

    return(
        <div className="flex flex-col space-y-4  text-white">

            <div className="flex relative justify-center items-center">
                <textarea placeholder={label} {...register(htmlFor, { required: 'This field is required' })}
                    className={` bg-transparent border border-white  outline-none focus:border-blue-600
                    rounded-xl px-3 w-76 h-32 py-2 placeholder-zinc-500 ${error && 'border-rose-600'}`}
                />
                {error && <FormError error={error?.message}/>}
            </div>

        </div>
      )
}
