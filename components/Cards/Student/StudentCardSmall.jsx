import React from 'react'

export default function StudentCardSmall({studentId, name, handleRouting}) {

    return (
        <div className='flex flex-col space-y-2 items-center rounded-3xl  h-60 w-40 bg-zinc-800 p-3' 
            onClick={()=>handleRouting(studentId)}>
            <div className='flex items-center space-x-2 bg-white h-48 w-full rounded-3xl px-2'>

            </div>
            <div className='flex flex-col'>
                <h6>{name}</h6>
                <p>{`s`}</p>
            </div>
            {/* <button className='flex justify-center items-center bg-white py-2 px-4 rounded-2xl text-indigo-600 font-bold' >
                View
            </button> */}
        </div>
    )
}
