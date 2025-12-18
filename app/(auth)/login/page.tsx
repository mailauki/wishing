import { login } from '../actions';
import { Button, Link, TextField, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <>
      <div className='w-full flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
        <Typography variant='h1' fontSize={42} fontWeight={500} className='max-w-xs leading-10 tracking-tight'>Login</Typography>
        <Typography>Enter valid email & password to continue</Typography>
        <form className='w-full max-w-sm flex flex-col gap-4'>
          <TextField label='Email' id='email' name='email' type='email' placeholder='this.is.it@email.com' />
          <TextField label='Password' id='password' name='password' type='password' />
          <Button formAction={login} variant='contained' size='large' fullWidth>Login</Button>
        </form>
        <Link href='/forgot-password'>Forgot password</Link>
      </div>
      <div className='py-32'>
        <Typography>Don't have an account yet? <Link href='/signup'>Signup</Link></Typography>
      </div>
    </>
  )
}