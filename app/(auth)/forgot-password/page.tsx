import { signup } from '../actions';
import { Button, Link, TextField, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <>
      <div className='w-full max-w-sm flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
        <Typography variant='h1' fontSize={42} fontWeight={500} className='max-w-xs leading-10 tracking-tight'>Forgot password</Typography>
        <Typography>Don't worry it happens. Please enter the address associated with your account</Typography>
        <form className='w-full flex flex-col gap-4'>
          <TextField label='Email' id='email' name='email' type='email' placeholder='this.is.it@email.com' />
          <Button formAction={signup} variant='contained' size='large' fullWidth>Send OTP</Button>
        </form>
      </div>
      <div className='py-32'>
        <Typography>Remember your password? <Link href='/login'>Login</Link></Typography>
      </div>
    </>
  )
}