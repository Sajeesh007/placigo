import { format} from 'timeago.js';


export default function StudentPost({name, content, time}) {

    console.log(format(time, 'en_US'))

    return (
        <div className='flex text-white p-3 w-full relative'>
            
            <div className="bg-indigo-600 w-10 h-10 rounded-full text-xs flex justify-center items-center absolute uppercase">
                {name?.substring(0,2)}
            </div>
            
            <div className="flex flex-col pl-12 space-y-4">

                <div className="flex flex-col space-y-0.5">
                    {/* name and time */}
                    <div className="flex items-center space-x-4">
                        <h6 className="text-sm">{name}</h6>
                        <p className="text-zinc-500">{format(time, 'en_US')}</p>
                    </div>

                    {/* description */}
                    <div className="flex break-all w-full whitespace-pre-line">
                        {`${content}`}
                    </div>
                </div>
            </div>

        </div>
    )
}
