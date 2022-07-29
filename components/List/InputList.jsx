import InputTextX from "@/modules/Form/InputTextX";


export default function InputList({values, edit, register, errors }) {

    return (
        <div className='flex flex-col justify-center pt-4 items-center space-y-3'>
            {/* {
                edit && 
                    <div className="flex items-center space-x-10 py-2">
                        <div className="flex space-x-2 items-center">
                            <div className="w-4 h-4 bg-zinc-700 rounded-full"/>
                            <p>Can edit</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <div className="w-4 h-4 bg-rose-600 rounded-full"/>
                            <p>Cannot edit</p>
                        </div>
                    </div>
            } */}
            {
                values.map((item)=>
                    <InputTextX label={item.label} htmlFor={item.htmlFor} 
                        type={item.type} register={register} error={errors?.[item.htmlFor]} 
                        disabled={ edit ? item.disable ? true : false : true} key={item.htmlFor} edit={edit}/> 
            )}

        </div> 
    )
}
