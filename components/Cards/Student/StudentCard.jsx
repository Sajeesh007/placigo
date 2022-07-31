import React from 'react'

export default function StudentCard({collegeId, studentId, name, college, handleRouting}) {

    return (
        <div className='flex justify-between px-6 items-center rounded-3xl grdnt-indigo h-20 w-full odd:grdnt-teal'>
            <div className='flex items-center space-x-2'>
                <div className='bg-white w-14 h-14 rounded-full'/>
                <div className='flex flex-col'>
                    <h6>{name}</h6>
                    <p>{college}</p>
                </div>
            </div>
            <button className='flex justify-center items-center bg-white py-2 px-4 rounded-2xl text-indigo-600 font-bold' 
                onClick={()=>handleRouting(studentId, collegeId)}>
                View
            </button>
        </div>
    )
}
