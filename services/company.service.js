import { supabase } from "supabse";


export const getCompanyById = ({id, setdata, seterror, setloading}) => {

}

// ----------------------------------------------------------------JOBS--------------------------------------------------------
export const addJob = async ({data, setsuccess, seterror, setloading}) => {
    setloading(true)
    const job = await supabase.from('jobs').insert([data])
    if(job?.error)
        seterror(true)
    else
        setsuccess(job.data)
    setloading(false)
}
export const getJobs = async ({setjobsData, seterror, setloading}) => {
    setloading(true)
    const jobs = await supabase.from('jobs').select(`*,company(*)`)
    if(jobs?.error)
        seterror(true)
    else
        setjobsData(jobs.data)
    setloading(false)
}
export const getJobById = async ({id, setjobData, setglobalJobData, seterror, setloading}) => {
    setloading(true)
    const jobs = await supabase.from('jobs').select(`*,company(*)`).match({id: id})
    if(jobs?.error)
        seterror(true)
    else{
        setjobData && setjobData(jobs.data[0])
        setglobalJobData && setglobalJobData(jobs.data[0])
    }
    setloading(false)
}

export const getJobAppliedStudents = async ({id, setstudentData, seterror, setloading}) => {
    setloading(true)
    const students = await supabase.from('student').select(`*,college(*)`).in('id',id)
    if(students?.error)
        seterror(true)
    else
        setstudentData(students.data)
    setloading(false)
}