import Button from '@mui/material/Button';
import { signup } from '../actions';
import TextField from '@mui/material/TextField';
import { Link, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <>
      <div className='w-full flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
        <Typography variant='h1' fontSize={42} fontWeight={500} className='max-w-xs leading-10 tracking-tight'>Signup</Typography>
        <Typography>Use proper information to continue</Typography>
        {/* <p>Don't worry it happens. Please enter the address associated with your account</p> */}
        {/* <Typography>Remember your password? <Link>Login</Link></Typography> */}
        <form className='w-full max-w-sm flex flex-col gap-4'>
          <TextField label='Email' id='email' name='email' type='email' placeholder='this.is.it@email.com' />
          <TextField label='Password' id='password' name='password' type='password' />
          <Button formAction={signup} variant='contained'>Create Account</Button>
        </form>
      </div>
      <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
        <Typography>Already have an account? <Link href='/login'>Login</Link></Typography>
      </div>
    </>
  )
}