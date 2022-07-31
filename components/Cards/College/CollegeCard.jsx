import React from 'react'

export default function CollegeCard({id, name, city, handleRouting}) {

    return (
        <div className='flex justify-between px-4 items-center rounded-3xl grdnt-orange h-20 w-full odd:grdnt-teal text-orange-600 odd:text-teal-600'>
            <div className='flex items-center space-x-2 text-white'>
                <div className='bg-white w-14 h-14 rounded-full'/>
                <div className='flex flex-col'>
                    <h6>{name}</h6>
                    <p>{city}</p>
                </div>
            </div>
            <button className='flex justify-center items-center bg-white py-2 px-4 rounded-2xl font-bold' 
                onClick={()=>handleRouting(id)}>
                View
            </button>
        </div>
    )
}
