import InputText from '@/modules/Form/InputText'
import MultipleInputText from '@/modules/Form/MultipleInputText'
import Select from '@/modules/Form/Select'
import TextArea from '@/modules/Form/TextArea'

export default function CollegRegistration({ register, errors }) {

  return (
    <div className='flex flex-col space-y-10 items-center'>
      <div className='flex flex-col space-y-4 items-center'>
          <InputText type='text' htmlFor='name' label='College Name' register={register} error={errors['name']}/>
          <Select name='university' label='University' values={['KTU']} register={register}  error={errors['university']}/>
          <TextArea htmlFor='courses' label='Courses, use comma to seperate' register={register} error={errors['courses']}/>
          <TextArea htmlFor='specializations' label='Specialization, use comma to seperate' register={register} error={errors['specializations']}/>
      </div>
        <div className='flex flex-col space-y-4 items-center'>
          <InputText type='text' htmlFor='street' label='Street' register={register} error={errors['street']}/>
          <InputText type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
          <InputText type='text' htmlFor='district' label='District' register={register} error={errors['district']}/>
          <InputText type='number' htmlFor='pincode' label='Pincode' register={register} error={errors['pincode']}/>
          <InputText type='text' htmlFor='website' label='Website' register={register} error={errors['website']}/>
          <InputText type='tel' htmlFor='mobile' label='Mobile Number' register={register} error={errors['mobile']}/>
        </div>

        <div className='flex flex-col space-y-4 items-center'>
          <InputText type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
          <InputText type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
        </div>

    </div>
  )
}
