

export default function CollegeCard() {
  return (
    <div className='flex flex-col grdnt-teal h-30 w-96 rounded-3xl  py-4 px-6'>

        {/* heading */}
        <div className='flex flex-col space-y-px w-60'>
            <h6>TCS YEP Training Program</h6>
            <p>Training</p>
        </div>

        {/* description */}
        <div className='flex'>
            <p className='break-all whitespace-pre-line'>{`
                shdgfsjdfnsdbfmsfmnbfdbsssss\n fuch     ssssssssssss
                sssssssssssssssssssssssss
                saaaaaaaaaaaaaaaaaaasdkdsf
            `}</p>
        </div>

        {/* more */}
        <div className="flex justify-center pt-3">
            <button className="bg-white px-4 font-semibold rounded-xl text-teal-600 py-2">
                View More
            </button>
        </div>
    </div>
  )
}
