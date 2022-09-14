export default function CompanyCardForStudentAndCollege({data, handleViewCompany}) {

  return (
      <div className='flex justify-between px-4 items-center rounded-3xl grdnt-indigo h-20 w-full text-indigo-600'>
          <div className='flex items-center space-x-2 text-white'>
            <div className='flex justify-center items-center bg-white rounded-full p-1'>
                <img src={data?.image} alt={data?.name} className='w-12 h-12 '/>
            </div>
            <div className='flex flex-col'>
                <h6>{data?.name}</h6>
                <p>{data?.head_office}</p>
                <p className="text-indigo-300 text-xs pt-px">{data?.industry}</p>
            </div>
          </div>
          <button className='flex justify-center items-center bg-white py-2 px-4 rounded-2xl font-bold' 
              onClick={()=>handleViewCompany(data?.id)}>
              View
          </button>
      </div>
  )
}
