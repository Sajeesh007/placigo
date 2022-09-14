
export default function StudentCardSmall({studentId, image, name, course, handleRouting}) {

    return (
        <div className='flex flex-col space-y-2 items-center rounded-3xl  h-60 w-40 bg-zinc-800 p-3' 
            onClick={()=>handleRouting(studentId)}>
            <img src={image} alt='student' className='flex items-center space-x-2 bg-white h-48 w-full rounded-3xl px-2'/>
            <div className='flex flex-col'>
                <h6>{name.length > 11 ? name.slice(0, 11).concat('...') : name}</h6>
                <p>{course}</p>
            </div>
        </div>
    )
}
