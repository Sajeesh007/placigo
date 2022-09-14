import InputTextX from '@/modules/Form/InputTextX'
import SelectX from '@/modules/Form/SelectX'
import TextAreaX from '@/modules/Form/TextAreaX'

export default function CollegeProfileEdit({ register, errors }) {

  return (
    <div className='flex flex-col space-y-10 items-center'>
      <div className='flex flex-col space-y-4 items-center'>
          <InputTextX type='text' htmlFor='name' label='College Name' register={register} error={errors['name']}/>
          <SelectX name='university' label='University' values={['KTU']} register={register}  error={errors['university']}/>
          <TextAreaX htmlFor='courses' label='Courses, use comma to seperate' register={register} error={errors['courses']}/>
          <TextAreaX htmlFor='specializations' label='Specialization, use comma to seperate' register={register} error={errors['specializations']}/>
          <TextAreaX htmlFor='about' label='About' register={register} error={errors['about']}/>
      </div>
        <div className='flex flex-col space-y-4 items-center'>
          <InputTextX type='text' htmlFor='street' label='Street' register={register} error={errors['street']}/>
          <InputTextX type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
          <InputTextX type='text' htmlFor='district' label='District' register={register} error={errors['district']}/>
          <InputTextX type='number' htmlFor='pincode' label='Pincode' register={register} error={errors['pincode']}/>
          <InputTextX type='text' htmlFor='website' label='Website' register={register} error={errors['website']}/>
          <InputTextX type='tel' htmlFor='mobile' label='Mobile Number' register={register} error={errors['mobile']}/>
        </div>

        <div className='flex flex-col space-y-4 items-center'>
          <InputTextX type='email' htmlFor='email' label='Email' register={register} error={errors['email']} disable={true}/>
        </div>

    </div>
  )
}
