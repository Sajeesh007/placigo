import { supabase } from "supabse";

export const getCollegeDetails = async ({columns, selectAll}) => {
    let columnNames
    selectAll ? columnNames = '*' : columnNames = columns.join(',')
    const { data, error } = await supabase.from('college').select(`${columnNames}`)

    if(error){
        return {
            data: null,
            error: true
        }
    }else {
        return {
            data: data,
            error: false
        }
    }
    
}

export const getColleges = async ({setcollegesData, setloading, seterror}) => {
    setloading(true)
    const colleges = await supabase.from('college').select()
    if(colleges?.error) seterror(true)
    else setcollegesData(colleges.data)
    setloading(false)
}
export const getCollegeById = async ({id, setcollegeData, setloading, seterror}) => {
    setloading(true)
    const college = await supabase.from('college').select().match({id: id})
    if(college?.error) seterror(true)
    else setcollegeData(college.data[0])
    setloading(false)
}