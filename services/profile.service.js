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
    }])

    if (student?.error) {
        seterror(true)
    } else {
        setsuccess(true)
    }
}
export const getStudentProfile = async ({id, setprofileData, seterror}) => {
    const company = await supabase.from('student').select().match({id: id})
    if (company?.error) seterror(true)
    else setprofileData(company?.data[0])
}
export const updateStuddentProfile = async ({id, data, seterror, setloading}) => {
    setloading(true)
    if(typeof(data.image) == 'object') {
        const image = await supabase.storage.from('student-profile').upload('profile/' + id.toString(), data.image[0], {upsert: true})
        data.image = 'https://sxiqrathaylvbolaekjw.supabase.co/storage/v1/object/public/' + image?.data?.Key
        await supabase.from('student').update(data).match({ id: id }) 
        await supabase.auth.update({ data: data })
    }else {
        await supabase.from('student').update(data).match({ id: id }) 
        await supabase.auth.update({ data: data })
    }
    setloading(false)
}

// -------------------------------------------------------------- College -----------------------------------------------------------------
export const createCollege = async ({id, data, seterror, setsuccess}) => {
    const college = await supabase.from('college').insert([{
        id: id,
        name: data.name,
        university: data.university,
        // courses: data.courses.replace(/\s+/g, '').replace(/\n+/g,'').split(','),
        // specializations: data.specializations.replace(/\s+/g, '').replace(/\n+/g,'').split(','),
        // about: data.about,
        // mobile: data.mobile,
        email: data.email,
        // website: data.website,
        // street: data.street,
        city: data.city,
        // district: data.district,
        // pincode: data.pincode,
    }])

    if (college?.error) {
        seterror(true)
    } else {
        setsuccess(true)
    }
}
export const getCollegeProfile = async ({id, setprofileData, seterror}) => {
    const college = await supabase.from('college').select().match({id: id})
    if (college?.error) seterror(true)
    else setprofileData(college?.data[0])
}
export const updateCollegeProfile = async ({id, data, setloading}) => {
    setloading(true)
    if(typeof(data.image) == 'object') {
        const image = await supabase.storage.from('college-profile').upload('profile/' + id.toString(), data.image[0], {upsert: true})
        data.image = 'https://sxiqrathaylvbolaekjw.supabase.co/storage/v1/object/public/' + image?.data?.Key
        await supabase.from('college').update(data).match({ id: id }) 
        await supabase.auth.update({ data: data })
    }else {
        await supabase.from('college').update(data).match({ id: id }) 
        await supabase.auth.update({ data: data })
    }
    setloading(false)
}

// ---------------------------------------------------------------------- Company ---------------------------------------------------------------
export const createCompany = async ({id, data, seterror, setsuccess}) => {
    const company = await supabase.from('company').insert([{
        id: id,
        name: data.name,
        head_office: data.head_office,
        mobile: data.mobile,
        email: data.email,
        website: data.website,
    }])

    if (company?.error) {
        seterror(true)
    } else {
        setsuccess(true)
    }
}
export const getCompanyProfile = async ({id, setprofileData, seterror}) => {
    const company = await supabase.from('company').select().match({id: id})
    if (company?.error) seterror(true)
    else setprofileData(company?.data[0])
}
export const updateCompanyProfile = async ({id, data, seterror, setloading}) => {
    setloading(true)
    if(typeof(data.image) == 'object') {
        const image = await supabase.storage.from('company-profile').upload('profile/' + id.toString(), data.image[0], {upsert: true})
        data.image = 'https://sxiqrathaylvbolaekjw.supabase.co/storage/v1/object/public/' + image?.data?.Key
        await supabase.from('company').update(data).match({ id: id }) 
        await supabase.auth.update({ data: data })
    }else {
        await supabase.from('company').update(data).match({ id: id }) 
        await supabase.auth.update({ data: data })
    }
    setloading(false)
}
