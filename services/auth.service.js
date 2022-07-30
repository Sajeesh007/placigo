import { supabase } from "supabase";
import { createCollege, createStudent } from "./profile.service";

// ------------------------------------------------------ auth ----------------------------------------------------
export async function signUp({email, password, data, setsuccess, seterror, setloading, role}){
    setloading(true)
    delete data.password
    data.role = role
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    },
    {
      data: data,
    })

    if(error){
        seterror(error)
    } else {
        if(role == 'student'){
            createStudent({id: user.id, data: user.user_metadata, seterror: seterror, setsuccess: setsuccess})
        } else if(role == 'college'){
            createCollege({id: user.id, data: user.user_metadata, seterror: seterror, setsuccess: setsuccess })
        }
    }
    setloading(false)
}

export async function signIn({email, password, setsuccess, seterror, setloading, router}){
    setloading(true)
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    })
    if(error)
        seterror(true)
    else{
        setsuccess(true)
        router.push(`/${user.user_metadata.role}`)
    }
    setloading(false)
}
