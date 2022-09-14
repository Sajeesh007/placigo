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
    if(colleges?.error) 
        seterror(true)
    else 
        setcollegesData(colleges.data)
    setloading(false)
}
export const getCollegeById = async ({id, setcollegeData, setloading, seterror}) => {
    setloading(true)
    const college = await supabase.from('college').select().match({id: id})
    if(college?.error) 
        seterror(true)
    else 
        setcollegeData(college.data[0])
    setloading(false)
}


// ------------------------------------------ College Notifications --------------------------------------------
export const addCollegeNotification = async ({data, router, seterror, setloading}) => {
    setloading(true)
    const notification = await supabase.from('college_notifications').insert([data])
    if(notification?.error) 
        seterror(true)
    else 
        router.push('/college/notification')
    setloading(false)
}
export const editCollegeNotification = async ({data, notificationId, router, seterror, setloading}) => {
    setloading(true)
    const notification = await supabase.from('college_notifications').update(data).match({ id: notificationId })
    if(notification?.error)
        seterror(true)
    else
        router.push('/college/notification/'+ router.query?.notificationId)
    setloading(false)
}
export const getCollegeNotifications = async ({id, setnotificationsData, setloading, seterror}) => {
    setloading(true)
    const notifications = await supabase.from('college_notifications').select().match({college: id})
    if(notifications?.error) 
        seterror(true)
    else 
        setnotificationsData(notifications.data)
    setloading(false)
}
export const getCollegeNotificationById = async ({notificationId, setnotificationData, setloading, seterror}) => {
    setloading(true)
    const notification = await supabase.from('college_notifications').select().match({id: notificationId})
    if(notification?.error) 
        seterror(true)
    else 
        setnotificationData(notification.data[0])
    setloading(false)
}