import { useEffect, useState } from "react"
import PostAdd from "@/components/Navigation/PostAdd"
import StudentPost from "@/components/Posts/StudentPosts"
import StudentLayout from "@/modules/Layout/StudentLayout"
import { getStudentPosts } from "services/student.service"

export default function StudentSpacePage() {

  const [studentPosts, setstudentPosts] = useState(null)
  const [collegePosts, setcollegePosts] = useState(null)
  const [companyPosts, setcompanyPosts] = useState(null)
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)

  
  useEffect(() => {
    getStudentPosts({setstudentPosts: setstudentPosts, seterror: seterror, setloading: setloading})
  }, [])
  

  return (
    <div className="page-top">

      {/* latest 5 posts */}
      <div className="flex flex-col divide-y divide-zinc-700">
        { 
          studentPosts?.map((post)=> 
            <StudentPost key={post.id} name={post.student.name} content={post.content} time={post.created_at}/>
          )         
        }

      </div>

    </div>
  )
}


StudentSpacePage.getLayout = function getLayout(page) {
    return (
      <StudentLayout>
        <PostAdd/>
        {page}
      </StudentLayout>
    )
}