import { FaTwitter } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

export default function MainCard() {
  return (
    <div className='flex flex-col justify-between bg-indigo-700 mx-4 h-30 rounded-3xl px-2 py-3'>

        <div className='flex justify-between items-center p-1'>
            <div className='flex space-x-2 items-center'>
                <div className='flex justify-center items-center bg-white p-3 rounded-3xl'>
                    <FaTwitter className='w-10 h-10 text-indigo-600'/>
                </div>
                <div>
                    <h6>It Support</h6>
                    <p className='text-indigo-300'>Twitter</p>
                </div>
            </div>
            <h6 className=''>15000/MO</h6>
        </div>

        <div className='flex justify-between items-center px-2'>
            <div className='flex items-center space-x-1'>
                <MdWork className='w-3 h-3'/>
                <p>Internship</p>
            </div>
            <p className='text-red-400'>
             2 Days Remaining
            </p>

        </div>
    </div>
  )
}
