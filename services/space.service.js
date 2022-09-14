import { supabase } from "supabse";


export const addSpace = async ({ data, type, setloading, seterror, router}) => {
    setloading(true)
    const space = await supabase.from(`space_${type}`).insert([data])
    if (space?.error) seterror(true)
    else router.push(`/${type}/space`)
    setloading(false)
}
export const getAllSpaces = async ({setspacesData, seterror, setloading}) => {
    setloading(true)
    const collegeSpaces = await supabase.from('space_college').select(`*, user: college(name)`).order('created_at', {ascending: false})
    const studentSpaces = await supabase.from('space_student').select(`*, user: student(name)`).order('created_at', {ascending: false})
    const compnaySpaces = await supabase.from('space_company').select(`*, user: company(name)`).order('created_at', {ascending: false})
    let a = []

    if( (!studentSpaces?.error) && (!collegeSpaces?.error) && (!compnaySpaces?.error) ){
        studentSpaces?.data?.map((item)=> a?.push(item))
        collegeSpaces?.data?.map((item)=> a?.push(item))
        compnaySpaces?.data?.map((item)=> a?.push(item))
        setspacesData(a)
    } else seterror(true)
    setloading(false)
}
export const getSpacesByStudentId = async ({ id, setspaceData, setloading, seterror }) => {
    setloading(true)
    const space = await supabase.from(`space_student`).select(`*, user: student(*)`).match({student: id})
    if (space?.error) seterror(true)
    else setspaceData(space?.data)
    setloading(false)
}
export const getSpacesByCollegeId = async ({ id, setspaceData, setloading, seterror }) => {
    setloading(true)
    const space = await supabase.from(`space_college`).select(`*, user: college(*)`).match({college: id})
    if (space?.error) seterror(true)
    else setspaceData(space?.data)
    setloading(false)
}
export const getSpacesByCompanyId = async ({ id, setspaceData, setloading, seterror }) => {
    setloading(true)
    const space = await supabase.from(`space_company`).select(`*, user: company(*)`).match({company: id})
    if (space?.error) seterror(true)
    else setspaceData(space?.data)
    setloading(false)
}