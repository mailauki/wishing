'use client'

import { forgotPassword } from '../actions';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useFormStatus } from 'react-dom';

export default function ForgotPassword() {
  const { pending } = useFormStatus()

  return (
    <>
      <Stack spacing={2}>
        <Typography variant='h4' component='h1'>Forgot password</Typography>
        <Typography variant='subtitle1'>Don't worry it happens</Typography>
        <Typography variant='subtitle1'>Please enter the address associated with your account</Typography>
        <form className='w-full flex flex-col gap-4'>
          <TextField label='Email' id='email' name='email' type='email' placeholder='this.is.it@email.com' />
          <Button formAction={forgotPassword} variant='contained' size='large' fullWidth disabled={pending}>{pending ? 'Loading...' : 'Send OTP'}</Button>
        </form>
      </Stack>
      <Typography>Remember your password? <Link href='/login'>Login</Link></Typography>
    </>
  )
}