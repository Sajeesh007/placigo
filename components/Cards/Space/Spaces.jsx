import { format} from 'timeago.js';


export default function Spaces({data}) {

    return (
        <div className='flex text-white py-3 w-full relative'>
            
            <div className="bg-indigo-600 w-10 h-10 rounded-full text-xs flex justify-center items-center absolute uppercase">
                {data?.user?.name?.substring(0,2)}
            </div>
            

            <div className="flex flex-col space-y-0.5 w-full pl-12">
                {/* name and time */}
                <div className="flex items-center justify-between">
                    <h6 className="text-base">{data?.user?.name}</h6>
                    <p className="text-zinc-400 text-xs">{format(data?.created_at, 'en_US')}</p>
                </div>

                {/* description */}
                <div className="flex flex-col break-words  w-full whitespace-pre-line">
                    <p className='text-sm pb-1'>{`${data?.content}`}</p>
                    {data?.link && <a className='text-indigo-500 underline italic text-xs' href={data?.link} rel="noreferrer" >
                        {data?.link?.length > 45  ? data?.link?.substring(0,45) + '...' : data?.link}
                    </a>}
                </div>
            </div>

        </div>
    )
}
