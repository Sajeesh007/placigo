import InputTextX from '@/modules/Form/InputTextX'
import { companyTypes, industries } from '@/constants/form.const'
import SelectX from '@/modules/Form/SelectX'
import TextAreaX from '@/modules/Form/TextAreaX'
import FileUploadX from '@/modules/Form/FileUploadX'

export default function CompanyProfileEdit({register, errors}) {

  return (
    <div className='flex flex-col space-y-10 items-center'>

      <div className='flex flex-col space-y-4 items-center'>
        <InputTextX type='text' htmlFor='name' label='Company Name' register={register} error={errors['name']}/>
        <FileUploadX htmlFor='image' label='Company Profile Image' register={register} error={errors['image']}/>
        <InputTextX type='text' htmlFor='area_served' label='Area Served' register={register} error={errors['area_served']}/>
        <SelectX name='type' label='Company Type' values={companyTypes} register={register}  error={errors['type']}/>
        <SelectX name='industry' label='Industry' values={industries} register={register}  error={errors['industry']}/>
        <TextAreaX htmlFor='about' label='About The Company' register={register} error={errors['about']}/>
      </div>

      <div className='flex flex-col space-y-4 items-center'>
        <InputTextX type='text' htmlFor='head_office' label='Head Office' register={register} error={errors['head_office']}/>
        <InputTextX type='text' htmlFor='street' label='Street' register={register} error={errors['street']}/>
        <InputTextX type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
        <InputTextX type='text' htmlFor='website' label='Website' register={register} error={errors['website']}/>
        <InputTextX type='tel' htmlFor='mobile' label='Mobile Number' register={register} error={errors['mobile']}/>
        <InputTextX type='email' disabled={true} htmlFor='email' label='Email' register={register} error={errors['email']}/>
      </div>

    </div>
  )
}
