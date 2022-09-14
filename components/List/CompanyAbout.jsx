
export default function CompanyAbout({data}) {

  return (
    <div className='flex flex-col px-4 space-y-1 pt-6  w-full'>

        <p className="text-sm"><span className="text-base font-bold">Name : </span>{data?.name}</p>
        <p className="text-sm"><span className="text-base font-bold">Email : </span>{data?.email}</p>
        <p className="text-sm "><span className="text-base font-bold">Phone : </span>{data?.mobile}</p>
        <p className="text-sm pb-4"><span className="text-base font-bold">Website : </span>{data?.website}</p>

        <p className="text-sm"><span className="text-base font-bold">Head Office : </span>{data?.head_office}</p>
        <p className="text-sm"><span className="text-base font-bold">Area Served : </span>{data?.area_served}</p>
        <p className="text-sm "><span className="text-base font-bold">Type : </span>{data?.type}</p>
        <p className="text-sm pb-4"><span className="text-base font-bold">Industry : </span>{data?.industry}</p>

        <p className="text-sm"><span className="text-base font-bold">Street : </span>{data?.street}</p>
        <p className="text-sm pb-4"><span className="text-base font-bold">City : </span>{data?.city}</p>

        <p className="text-sm break-words w-full"><span className="text-base font-bold">About : </span>{data?.about}sssssssssssssssssssssssss sssssssssssssssssssssssssssssssssss ssssss </p>
    </div>
  )
}
