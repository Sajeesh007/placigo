import React from 'react'

export default function DetailsIcon({icon, heading, value}) {
    return (
        <div className=' flex flex-col items-center space-y-1 '>
            <div className='flex justify-center items-center bg-indigo-600 rounded-full w-14 h-14'>
                {icon}
            </div>
            <p className='text-zinc-400 text-base pt-1 w-24 text-center'>{heading}</p>
            <h6 className='text-base font-semibold w-24 text-center'>{value}</h6>
        </div>   
    )
}
