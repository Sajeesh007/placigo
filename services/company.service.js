import { supabase } from "supabse";

export const getCompanies = async ({setcompaniesData, seterror, setloading}) => {
    setloading(true)
    const companies = await supabase.from('company').select()
    if(companies?.error)
        seterror(true)
    else
        setcompaniesData(companies.data)
    setloading(false)
}
export const getCompanyById = async ({id, setcompanyData, seterror, setloading}) => {
    setloading(true)
    const company = await supabase.from('company').select().match({id: id})
    if(company?.error) seterror(true)
    else setcompanyData(company.data[0])
    setloading(false)
}

