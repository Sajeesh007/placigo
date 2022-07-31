import { format} from 'timeago.js';


export default function Spaces({name, content, time}) {


    return (
        <div className='flex text-white p-3 w-full relative'>
            
            <div className="bg-indigo-600 w-10 h-10 rounded-full text-xs flex justify-center items-center absolute uppercase">
                {name?.substring(0,2)}
            </div>
            

            <div className="flex flex-col space-y-0.5 w-full pl-12">
                {/* name and time */}
                <div className="flex items-center justify-between">
                    <h6 className="text-sm">{name}</h6>
                    <p className="text-zinc-500">{format(time, 'en_US')}</p>
                </div>

                {/* description */}
                <div className="flex break-all w-full whitespace-pre-line">
                    {`${content}`}
                </div>
            </div>

        </div>
    )
}
