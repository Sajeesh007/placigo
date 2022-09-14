import StudentCardWithCollege from "@/components/Cards/Student/StudentCardWithCollege";
import Skelton from "@/components/Skelton/Skelton";

export default function JobAppliedStudents({studentsData, loading}) {
  console.log(studentsData);
  return (
    <div className='flex flex-col items-center space-y-4 px-3 pt-4 w-screen pb-40'>
        <h5>Applied Students</h5>
        { loading ?
            <Skelton height='h-20' size={[1,2,3,4,5,6,7]}/>:
            <div className='flex flex-col space-y-6 w-full'>
                { studentsData?.map((item)=>
                    <StudentCardWithCollege data={item?.student} key={item?.student?.id}/>
                )}
            </div>
        }
    </div>
  )
}
