import { supabase } from "supabse";

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
