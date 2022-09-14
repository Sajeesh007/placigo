import InputText from '@/modules/Form/InputText'
import Select from '@/modules/Form/Select'
import TextArea from '@/modules/Form/TextArea'
import { companyTypes, industries } from 'constants/form.const'

export default function CompanyRegistration({register, errors}) {

  return (
    <div className='flex flex-col space-y-10 items-center'>

      <div className='flex flex-col space-y-4 items-center'>
        <InputText type='text' htmlFor='name' label='Company Name' register={register} error={errors['name']}/>
      </div>

      <div className='flex flex-col space-y-4 items-center'>
        <InputText type='text' htmlFor='head_office' label='Head Office' register={register} error={errors['head_office']}/>
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
