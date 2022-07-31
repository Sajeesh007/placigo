import { supabase } from "supabse";

//---------------------------------------------------GENERAL --------------------------------------------------------
export const updateProfilePic = async ({bucket, name, file}) => {
    const image = await supabase.storage.from(bucket).upload(
        `public/${name}`, file, {
            cacheControl: '3600',
            upsert: false
    })

    console.log(image);
}

// ------------------------------------------------- STUDENT --------------------------------------------------------------
export const createStudent = async ({id, data, seterror, setsuccess}) => {
    const student = await supabase.from('student').insert([{
        id: id,
        name: data.name,
        gender: data.gender,
        dob: data.dob,
        college: data.college,
        course: data.course,
        specialization: data.specialization,
        mobile: data.mobile,
        email: data.email,
        street: data.street,
        city: data.city,
        district: data.district,
        pincode: data.pincode,
        status: "Pending",
    }])

    if (student?.error) {
        seterror(true)
    } else {
        setsuccess(true)
    }
}
export const getStudentProfile = async ({id, setprofileData, seterror, setloading}) => {
    setloading(true)
    const student = await supabase.from('student').select(`
        *,
        college(
            name,
            id
        )
    `).match({id: id})

    if (student?.error) {
        seterror(true)
    } else{
        const data = {...student?.data[0], college_name: student?.data[0].college?.name, college_id: student?.data[0].college?.id}
        setprofileData(data)
    }
    setloading(false)
}
export const updateStudentProfile = async ({id, data, setsuccess, seterror, setloading}) => {
    setloading(true)
    console.log(data);
    const student = await supabase.from('student').update(data).match({ id: id })
    if (student?.error) {
        seterror(true)
    } else {
        const student_metadata = await supabase.auth.update({ data: data })
        student_metadata?.error  ? seterror(true) : setsuccess(true)
    }
    setloading(false)
}

// -------------------------------------------------------------- College -----------------------------------------------------------------
export const createCollege = async ({id, data, seterror, setsuccess}) => {
    const college = await supabase.from('college').insert([{
        id: id,
        name: data.name,
        university: data.university,
        courses: data.courses.replace(/\s+/g, '').replace(/\n+/g,'').split(','),
        specializations: data.specializations.replace(/\s+/g, '').replace(/\n+/g,'').split(','),
        about: data.about,
        mobile: data.mobile,
        email: data.email,
        website: data.website,
        street: data.street,
        city: data.city,
        district: data.district,
        pincode: data.pincode,
        status: "Pending",
    }])

    if (college?.error) {
        seterror(true)
    } else {
        setsuccess(true)
    }
}

// ---------------------------------------------------------------------- Company ---------------------------------------------------------------
export const createCompany = async ({id, data, seterror, setsuccess}) => {
    const college = await supabase.from('company').insert([{
        id: id,
        name: data.name,
        type: data.type,
        head_office: data.head_office,
        area_served: data.area_served,
        industry: data.industry,
        about: data.about, 
        mobile: data.mobile,
        email: data.email,
        website: data.website,
        street: data.street,
        city: data.city,
        pincode: data.pincode,
        status: "Pending",
    }])

    if (college?.error) {
        seterror(true)
    } else {
        setsuccess(true)
    }
}

