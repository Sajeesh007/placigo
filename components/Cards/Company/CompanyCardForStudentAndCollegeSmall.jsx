
export default function CompanyCardForStudentAndCollegeSmall({data, handleViewCompany}) {
  return (
    <div className='flex flex-col justify-between grdnt-indigo mx-4 h-40 w-54 rounded-3xl px-3 py-3' onClick={()=>handleViewCompany(data.id)}>
      <div className='flex justify-center items-center bg-white p-3 rounded-3xl'>
          <img src={data?.image} alt={data?.name} className='w-20 h-20'/>
      </div>
      <h6 className="text-center pt-2">{data.name}</h6>
    </div>
  )
}
