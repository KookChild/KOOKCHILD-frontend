import { Path, useForm, UseFormRegister } from 'react-hook-form'

export interface IFormValues {
  'Child Name': string
  'Mission Title': string
  Reward: number
}

export type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
}
