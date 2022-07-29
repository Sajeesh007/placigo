import InputText from '@/modules/Form/InputText'
import Select from '@/modules/Form/Select'
import TextArea from '@/modules/Form/TextArea'
import { course, gender, spec } from 'constants/form.const'

export default function CompanyRegistration({register, errors}) {

  return (
    <div className='flex flex-col space-y-10 items-center'>

      <div className='flex flex-col space-y-4 items-center'>
        <InputText type='text' htmlFor='company_name' label='Company Name' register={register} error={errors['company_name']}/>
        <InputText type='text' htmlFor='area_served' label='Area Served' register={register} error={errors['area_served']}/>
        <InputText type='text' htmlFor='company_type' label='Company Type' register={register} error={errors['company_type']}/>
        <TextArea htmlFor='business_activites' label='Business Activites' register={register} error={errors['business_activites']}/>
        <TextArea htmlFor='about' label='About The Company' register={register} error={errors['about']}/>
      </div>

      <div className='flex flex-col space-y-4 items-center'>
        <InputText type='text' htmlFor='head_office' label='Head Office' register={register} error={errors['head_office']}/>
        <InputText type='text' htmlFor='street' label='street' register={register} error={errors['street']}/>
        <InputText type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
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
