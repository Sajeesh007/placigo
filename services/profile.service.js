import { supabase } from "../../supabse";

export const createStudent = async ({id, data, seterror, setsuccess}) => {
    const student = await supabase.from('student').insert([{
        student_id: id,
        full_name: data.full_name,
        gender: data.gender,
        age: data.age,
        college: data.college,
        course: data.course,
        specialization: data.specialization,
        mobile_no: data.mobile_no,
        email: data.email,
        address: data.address,
        city: data.city,
        district: data.district,
        picode: data.pincode,
    }])

    if (student?.error) {
        seterror(true)
    } else {
        setsuccess(true)
    }
}