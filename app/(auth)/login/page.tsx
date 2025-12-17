import Button from '@mui/material/Button';
import { login } from '../actions';
import TextField from '@mui/material/TextField';
import { Link, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <>
      <div className='w-full flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
        <Typography variant='h1' fontSize={42} fontWeight={500} className='max-w-xs leading-10 tracking-tight'>Welcome</Typography>
        <Typography>Enter valid email & password to continue</Typography>
        {/* <p>Use proper information to continue</p> */}
        {/* <p>Don't worry it happens. Please enter the address associated with your account</p> */}
        {/* <Typography>Already have an account? <Link>Login</Link></Typography> */}
        {/* <Typography>Remember your password? <Link>Login</Link></Typography> */}
        <form className='w-full max-w-sm flex flex-col gap-4'>
          <TextField label='Email' id='email' name='email' type='email' placeholder='this.is.it@email.com' />
          <TextField label='Password' id='password' name='password' type='password' />
          <Button formAction={login} variant='contained'>Login</Button>
          {/* <Button formAction={signup} variant='outlined'>Signup</Button> */}
        </form>
        <Link href='/forgot-password'>Forgot password</Link>
      </div>
      <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
        <Typography>Don't have an account yet? <Link href='/signup'>Signup</Link></Typography>
      </div>
    </>
  )
}