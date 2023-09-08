import { Path, useForm, UseFormRegister } from 'react-hook-form'

const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

export const MissionCreatePage = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    alert(JSON.stringify(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Child Name" register={register} required />
        <Input label="Mission Title" register={register} required />
        <Input label="Reward" register={register} required />
        <input type="submit" />
      </form>
    </div>
  )
}
