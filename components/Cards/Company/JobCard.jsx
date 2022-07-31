import { FaTwitter } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

export default function JobCard() {
  return (
    <div className='flex flex-col space-y-2 grdnt-indigo h-30 w-96 rounded-3xl py-4 px-6'>

        <div className='flex space-x-4 items-center'>
                {/* icon */}
                <div className='flex justify-center items-center bg-white p-3 rounded-3xl'>
                    <FaTwitter className='w-8 h-8 text-indigo-600'/>
                </div>
                {/* company, place */}
                <div className='flex flex-col'>
                    <h6>Twitter</h6>
                    <p >Kochi, India</p>
                </div>
        </div>

        {/* job title, type */}
        <div className='flex flex-col'>
            <h6>Senior Front End Developer</h6>
            <div className='flex items-center space-x-1'>
                <MdWork className='w-3 h-3'/>
                <p>Internship</p>
            </div>
        </div>

        <div className='flex items-center space-x-20'>
            <h6 className=''>15000/MO</h6>
            <button className='bg-white px-4 font-semibold rounded-xl text-indigo-600 py-2'>
                Apply
            </button>

        </div>
    </div>
  )
}
