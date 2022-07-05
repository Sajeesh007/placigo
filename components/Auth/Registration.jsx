import InputText from '@/modules/Form/InputText'
import Select from '@/modules/Form/Select'
import TextArea from '@/modules/Form/TextArea'
import React from 'react'

export default function Registration({values, register, errors}) {

  return (
    <div className='flex flex-col space-y-4'>
        {
            values?.map((item)=>
                item.field == 'text' ? 
                    <InputText type={item.type} htmlFor={item.htmlFor} label={item.label} register={register} error={errors[item.htmlFor]} key={item.htmlFor}/>
                : item.field == 'select' ?
                    <Select values={item.values} name={item.name} label={item.label} register={register}  error={errors[item.name]} key={item.name}/>
								: item.field == 'text_area' &&
									<TextArea htmlFor={item.htmlFor} label={item.label} register={register} error={errors[item.htmlFor]} key={item.htmlFor}/>
            )
        }
    </div>
  )
}
