import { supabase } from "supabse";

export const getStudentsByCollege = async ({id, setstudentsData, setloading, seterror}) => {
    setloading(true)
    const students = await supabase.from('student').select().match({college: id})
    if(students?.error) seterror(true)
    else setstudentsData(students?.data)
    setloading(false)
}
export const getStudentById = async ({id, setstudentData, setloading, seterror}) => {
    setloading(true)
    const student = await supabase.from('student').select(`*, college(*)`).match({id: id})
    if(student?.error) seterror(true)
    else setstudentData(student.data[0])
    setloading(false)
}

