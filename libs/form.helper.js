import { getCollegeDetails } from "services/college.service"

export const getCollegeDropDownData = async () => {
    const {data, error} = await getCollegeDetails({columns: ['name','id']})
    if(error){
        return{
            data: null,
            error: true
        }
    } else {
        return {
            data: data,
            error: false
        }
    }
}
