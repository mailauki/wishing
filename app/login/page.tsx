import Textfield from '@/components/ui/textfield'
import { login, signup } from './actions'
import Button from '@/components/ui/button'

export default function LoginPage() {
  return (
    <form className='max-w-sm flex flex-col gap-4 p-4 mx-auto my-10'>
      <Textfield label='Email' id='email' name='email' type='email' />
      <Textfield label='Password' id='password' name='password' type='password' />
      <Button formAction={login} label='Login' />
      <Button formAction={signup} label='Signup' variant='outlined' />
    </form>
  )
}