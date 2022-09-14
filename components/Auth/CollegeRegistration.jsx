import InputText from '@/modules/Form/InputText'
import Select from '@/modules/Form/Select'
import TextArea from '@/modules/Form/TextArea'

export default function CollegRegistration({ register, errors }) {

  return (
    <div className='flex flex-col space-y-10 items-center'>
      <div className='flex flex-col space-y-4 items-center'>
          <InputText type='text' htmlFor='name' label='College Name' register={register} error={errors['name']}/>
          <Select name='university' label='University' values={['KTU']} register={register}  error={errors['university']}/>
      </div>
        <div className='flex flex-col space-y-4 items-center'>
          <InputText type='text' htmlFor='city' label='City' register={register} error={errors['city']}/>
        </div>

        <div className='flex flex-col space-y-4 items-center'>
          <InputText type='email' htmlFor='email' label='Email' register={register} error={errors['email']}/>
          <InputText type='password' htmlFor='password' label='Password' register={register} error={errors['password']}/>
        </div>

    </div>
  )
}
