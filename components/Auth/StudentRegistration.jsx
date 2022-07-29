import InputText from '@/modules/Form/InputText'
import Select from '@/modules/Form/Select'
import { course, gender, spec } from 'constants/form.const'

export default function StudentRegistration({collegeData, register, errors}) {

  return (
    <div className='flex flex-col space-y-10 items-center'>

      <div className='flex flex-col space-y-4 items-center'>
        <InputText type='text' htmlFor='name' label='Full Name' register={register} error={errors['name']}/>
        <InputText type='date' htmlFor='dob' label='Date of Birth' register={register} error={errors['dob']}/>
        <Select name='gender' label='Gender' values={gender} register={register}  error={errors['gender']}/>
        <Select name='college' label='College' values={collegeData} register={register}  error={errors['college']}/>
        <Select name='course' label='Course' values={course} register={register}  error={errors['course']}/>
        <Select name='specialization' label='Specialization' values={spec} register={register}  error={errors['specialization']}/>
      </div>

        <div className='flex flex-col space-y-4 items-center'>
          <InputText type='text' htmlFor='street' label='Street' register={register} error={errors['street']}/>
          <InputText type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
          <InputText type='text' htmlFor='district' label='District' register={register} error={errors['district']}/>
          <InputText type='number' htmlFor='pincode' label='Pincode' register={register} error={errors['pincode']}/>
        <InputText type='tel' htmlFor='mobile' label='Mobile Number' register={register} error={errors['mobile']}/>
        </div>

        <div className='flex flex-col space-y-4 items-center'>
          <InputText type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
          <InputText type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
        </div>

    </div>
  )
}
