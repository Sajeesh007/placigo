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