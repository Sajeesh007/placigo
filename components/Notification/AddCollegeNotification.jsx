import InputDate from "@/modules/Form/InputDate";
import InputText from "@/modules/Form/InputText";
import InputTime from "@/modules/Form/InputTime";
import TextArea from "@/modules/Form/TextArea";


export default function AddCollegeNotification({register, errors, handleSubmit, onSubmit}) {
  return (
    <form className='flex flex-col space-y-8 items-center' onSubmit={handleSubmit(onSubmit)}>

        <h5 className='text-white '>Add New Notification</h5>

        <div className='flex flex-col space-y-4 items-center'>
            <InputText type='text' htmlFor='title' label='Title' register={register} error={errors['title']}/>
            <InputText type='text' htmlFor='type' label='Type' register={register} error={errors['type']}/>
            <InputText type='text' htmlFor='organizer' label='Organizer' register={register} error={errors['organizer']}/>
            <InputText type='text' htmlFor='location' label='Location' register={register} error={errors['location']}/>
            <InputDate htmlFor='date' label='Date' register={register} error={errors['date']}/>
            <InputTime htmlFor='time' label='Time' register={register} error={errors['time']}/>
            <TextArea label='Notification Details seperated by \n' htmlFor='details' register={register} error={errors['details']}/>
            <InputText type='text' htmlFor='link_text' label='Link text' register={register} error={errors['link_text']}/>
            <InputText type='text' htmlFor='link_url' label='Link url' register={register} error={errors['link_url']}/>
        </div>

        <button type='submit' className='flex justify-center items-center bg-indigo-600 text-white
            text-lg font-bold rounded-2xl w-76 h-11'>
            View
        </button>
    </form>
  )
}

