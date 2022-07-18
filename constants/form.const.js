
    const colleges = ['GECW', 'GECK', 'CET', 'GECT']
    const gender = ['Male', 'Female', 'Other']
    const university = ['KTU']
    const collegeType = ['Government', 'Government Controlled', 'Self Financing']
    const spec = ['CS', 'AI', 'Electronics']

export const registration = {
    student: [
        {field: 'text', type: 'text', htmlFor: 'full_name', label: 'Full Name'},
        {field: 'text', type: 'number', htmlFor: 'age', label: 'Age'},
        {field: 'select', name: 'gender', values: gender, label: 'Gender'},
        {field: 'text', type: 'tel', htmlFor: 'mobile_no', label: 'Phone Number'},
        {field: 'select', name: 'college', values: colleges, label: 'College'},
        {field: 'text', type: 'text', htmlFor: 'course', label: 'Course'},
        {field: 'select', name: 'specialization', values: spec, label: 'Specialization'},
        {field: 'text_area', type: 'text', htmlFor: 'address', label: 'Address'},
        {field: 'text', type: 'text', htmlFor: 'city', label: 'City'},
        {field: 'text', type: 'text', htmlFor: 'district', label: 'District'},
        {field: 'text', type: 'number', htmlFor: 'pincode', label: 'Pincode'},
        {field: 'text', type: 'email', htmlFor: 'email', label: 'Email'},
        {field: 'text', type: 'password', htmlFor: 'password', label: 'Password'},
    ],
    college: [
        {field: 'text', type: 'text', htmlFor: 'college_name', label: 'College Name'},
        {field: 'select', name: 'type', values: collegeType, label: 'College Type'},
        {field: 'select', name: 'university', values: university, label: 'University'},
        {field: 'text', type: 'text', htmlFor: 'district', label: 'District'},
        {field: 'text', type: 'text', htmlFor: 'city', label: 'City'},
        {field: 'text', type: 'text', htmlFor: 'principal', label: 'Principal Name'},
        {field: 'text', type: 'text', htmlFor: 'website', label: 'Website'},
        {field: 'text', type: 'tel', htmlFor: 'phone', label: 'Phone'},
        // {field: 'select', name: 'specialization', values: spec, label: 'Specialization'},
        {field: 'text', type: 'email', htmlFor: 'email', label: 'Email'},
        {field: 'text', type: 'password', htmlFor: 'password', label: 'Password'},
    ],
    company: [
        {field: 'text', type: 'text', htmlFor: 'company_name', label: 'Company Name'},
        {field: 'text', type: 'text', htmlFor: 'area_served', label: 'Aread Served'},
        {field: 'text', type: 'text', htmlFor: 'head_office', label: 'Head Office'},
        {field: 'text', type: 'text', htmlFor: 'company_type', label: 'Company Type'},
        {field: 'text_area', htmlFor: 'activity', label: 'Business Activites'},
        {field: 'text_area', htmlFor: 'about', label: 'About the Company'},
        {field: 'text', type: 'text', htmlFor: 'website', label: 'Website'},
        {field: 'text', type: 'tel', htmlFor: 'phone', label: 'Phone Number'},
        {field: 'text', type: 'email', htmlFor: 'email', label: 'Email'},
        {field: 'text', type: 'password', htmlFor: 'password', label: 'Password'},
    ]
}