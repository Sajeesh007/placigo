
export default function StudentAbout({data}) {

  return (
    <div className='flex flex-col px-4 space-y-1 pt-6  '>

        <p className="text-sm"><span className="text-base font-bold">Name : </span>{data?.name}</p>
        <p className="text-sm"><span className="text-base font-bold">Email : </span>{data?.email}</p>
        <p className="text-sm pb-4"><span className="text-base font-bold">Phone : </span>{data?.mobile}</p>

        <p className="text-sm"><span className="text-base font-bold">University : </span>{data?.college?.name}</p>
        <p className="text-sm"><span className="text-base font-bold">Course : </span>{data?.course}</p>
        <p className="text-sm pb-4"><span className="text-base font-bold">Specialization : </span>{data?.specialization}</p>

        <p className="text-sm"><span className="text-base font-bold">Street : </span>{data?.street}</p>
        <p className="text-sm"><span className="text-base font-bold">City : </span>{data?.city}</p>
        <p className="text-sm pb-4"><span className="text-base font-bold">District : </span>{data?.district}</p>

        <p className="text-sm break-words w-full"><span className="text-base font-bold">About : </span>{data?.about}sssssssssssssssssssssssss sssssssssssssssssssssssssssssssssss ssssss </p>
    
    </div>
  )
}
