import FileUploadX from '@/modules/Form/FileUploadX'
import InputText from '@/modules/Form/InputText'
import InputTextX from '@/modules/Form/InputTextX'
import SelectX from '@/modules/Form/SelectX'
import { course, gender, spec } from 'constants/form.const'

export default function StudentProfileEdit({collegeData, register, errors}) {

  return (
    <div className='flex flex-col space-y-10 items-center'>

      <div className='flex flex-col space-y-4 items-center'>
        <InputTextX type='text' htmlFor='name' label='Full Name' register={register} error={errors['name']}/>
        <InputTextX type='date' htmlFor='dob' label='Date of Birth' register={register} error={errors['dob']}/>
        <SelectX name='gender' label='Gender' values={gender} register={register}  error={errors['gender']}/>
        <FileUploadX htmlFor='image' label='Company Profile Image' register={register} error={errors['image']}/>
        <SelectX name='course' label='Course' values={course} register={register}  error={errors['course']}/>
        <SelectX name='specialization' label='Specialization' values={spec} register={register}  error={errors['specialization']}/>
      </div>

        <div className='flex flex-col space-y-4 items-center'>
          <InputTextX type='text' htmlFor='street' label='Street' register={register} error={errors['street']}/>
          <InputTextX type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
          <InputTextX type='text' htmlFor='district' label='District' register={register} error={errors['district']}/>
          <InputTextX type='number' htmlFor='pincode' label='Pincode' register={register} error={errors['pincode']}/>
          <InputTextX type='tel' htmlFor='mobile' label='Mobile Number' register={register} error={errors['mobile']}/>
        </div>

        <div className='flex flex-col space-y-4 items-center'>
          <InputTextX type='email' htmlFor='email' label='Email' register={register} error={errors['email']} disabled={true}/>
        </div>

    </div>
  )
}
