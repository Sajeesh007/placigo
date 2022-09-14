
export default function CollegeAbout({data}) {

  return (
    <div className='flex flex-col px-4 space-y-1 pt-6  '>

        <p className="text-sm"><span className="text-base font-bold">Name : </span>{data?.name}</p>
        <p className="text-sm"><span className="text-base font-bold">Email : </span>{data?.email}</p>
        <p className="text-sm pb-4"><span className="text-base font-bold">Phone : </span>{data?.mobile}</p>

        <p className="text-sm"><span className="text-base font-bold">Course : </span>{data?.courses?.join(', ')}</p>
        <p className="text-sm pb-4"><span className="text-base font-bold">Specializations : </span>{data?.specializations?.join(', ')}</p>

        <p className="text-sm"><span className="text-base font-bold">Street : </span>{data?.street}</p>
        <p className="text-sm"><span className="text-base font-bold">City : </span>{data?.city}</p>
        <p className="text-sm"><span className="text-base font-bold">District : </span>{data?.district}</p>
    </div>
  )
}
