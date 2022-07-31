import { supabase } from "supabse";

export const getStudentsByCollege = async ({id, setstudentsData, setloading, seterror}) => {
    setloading(true)
    const students = await supabase.from('student').select().match({college: id})
    if(students?.error) seterror(true)
    else setstudentsData(students.data)
    setloading(false)
}

// -------------------------------------------------- Spaces --------------------------------------------------------------------------
export const addStudentPost = async ({id, content, setsuccess, setloading, seterror, router}) => {
    setloading(true)
    const post = await supabase.from('student_post').insert([{student: id, content: content}])
    if (post?.error) {
        seterror(true)
    } else {
        setsuccess(true)
        router.push('/student/space')
    }
    setloading(false)
}
export const getStudentPosts = async ({setstudentPosts, setloading, seterror, router}) => {
    setloading(true)
    const post = await supabase.from('student_post').select(`
        *,
        student(
            name,
            id
        )
    `)
    if (post?.error) {
        seterror(true)
    } else {
        setstudentPosts(post.data)
    }
    setloading(false)
}
