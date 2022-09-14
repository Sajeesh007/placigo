import { supabase } from "supabse";

// ----------------------------------------------------------------JOBS--------------------------------------------------------
export const addJob = async ({data, setsuccess, seterror, setloading}) => {
    setloading(true)
    const job = await supabase.from('jobs').insert([data])
    if(job?.error)
        seterror(true)
    else
        setsuccess(true)
    setloading(false)
}
export const editJob = async ({data, jobId, setsuccess, seterror, setloading}) => {
    setloading(true)
    const job = await supabase.from('jobs').update(data).match({ id: jobId })
    if(job?.error)
        seterror(true)
    else
        setsuccess(true)
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
export const geJobsByCompanyId = async ({id, setjobsData, setloading, seterror}) => {
    setloading(true)
    const jobs = await supabase.from('jobs').select().match({company: id})
    if(jobs?.error) seterror(true)
    else setjobsData(jobs.data)
    setloading(false)
}
export const getJobById = async ({id, setjobData, seterror, setloading}) => {
    setloading(true)
    const job = await supabase.from('jobs').select(`*,company(*)`).match({id: id})
    if(job?.error)
        seterror(true)
    else{
        setjobData && setjobData(job.data[0])
    }
    setloading(false)
}

// -----------------------------------------------------JOB Apply --------------------------------------------------
export const applyJob = async ({jobId, studentId, setsuccess, seterror, setloading}) => {
    setloading(true)
    const job = await supabase.from('job_applied').insert([{job: jobId, student: studentId}])
    if(job?.error)
        seterror(true)
    else
        setsuccess(true)
    setloading(false)
} 
export const getJobAppliedById = async ({id, setstudentsData, seterror, setloading}) => {
    setloading(true)
    const students = await supabase.from('job_applied').select(`*,student(*, college(*))`).match({job: id})
    if(students?.error)
        seterror(true)
    else
        students?.data?.length > 0 && setstudentsData(students?.data)
    setloading(false)
}
export const getJobAppliedByStudentId = async ({jobId, studentId, setjobApplied, seterror, setloading}) => {
    setloading(true)
    const job = await supabase.from('job_applied').select().match({job: jobId, student: studentId})
    if(job?.error)
        seterror(true)
    else 
        job?.data?.length > 0 ? setjobApplied(true) : setjobApplied(false)
    
    setloading(false)
}
export const getJobByIdAndAppliedStudents = async ({jobId, setglobalJobData, setjobData, setstudentData, seterror, setloading}) => {
    setloading(true)
    const job = await supabase.from('jobs').select(`*,company(*)`).match({id: jobId})
    if(job?.error){
        seterror(true)
    } else if(job?.data[0]?.applied) {
        const students = await supabase.from('student').select(`*,college(*)`).in('id',job?.data[0]?.applied)
        if(students?.error )
            seterror(true)
        else {
            setglobalJobData(job.data[0])
            setjobData(job.data[0])
            setstudentData(students.data)
        }
    } else{
        setglobalJobData(job.data[0])
        setjobData(job.data[0])
    }

    setloading(false)
}


// ------------------------------------------------------------- JOB Notification -------------------------------------------------------
export const addJobNotification = async ({data, router, seterror, setloading}) => {
    setloading(true)
    const notifications = await supabase.from('job_notifications').insert([data])
    if(notifications?.error)
        seterror(true)
    else
        router.push(`/company/jobs/${router.query?.jobId}`)
    setloading(false)
}
export const getJobNotifications = async ({setnotifications, jobId, seterror, setloading}) => {
    setloading(true)
    const notifications = await supabase.from('job_notifications').select().match({job: jobId}).order('created_at', {ascending: true})
    if(notifications?.error)
        seterror(true)
    else
        setnotifications(notifications?.data)
    setloading(false)
}