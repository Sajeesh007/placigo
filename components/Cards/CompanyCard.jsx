import { FaTwitter } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

export default function CompanyCard() {
  return (
    <div className='flex flex-col justify-between bg-indigo-700 mx-4 h-40 w-54 rounded-3xl px-3 py-3'>

        <div className='flex space-x-2 items-center'>
            <div className='flex justify-center items-center bg-white p-3 rounded-3xl'>
                <FaTwitter className='w-10 h-10 text-indigo-600'/>
            </div>
            <div>
                <h6>Apple</h6>
                <p className='text-indigo-300'>45 Job Vacancy</p>
            </div>
        </div>

        <div className='flex flex-col px-4'>

            <ul className='list-item list-disc'>
                <li >
                    <p>Salary : 85K - 100K/MO</p>
                </li>
                <li >
                    <p>Remote/Onsite</p>
                </li>
            </ul>

        </div>
    </div>
  )
}
