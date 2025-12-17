import Button from '@mui/material/Button';
import { login, signup } from './actions';
import TextField from '@mui/material/TextField';

export default function LoginPage() {
  return (
    <form className='max-w-sm flex flex-col gap-4 p-4 mx-auto my-10'>
      <TextField label='Email' id='email' name='email' type='email' placeholder='this.is.it@email.com' />
      <TextField label='Password' id='password' name='password' type='password' />
      <Button formAction={login} variant='contained'>Login</Button>
      <Button formAction={signup} variant='outlined'>Signup</Button>
    </form>
  )
}