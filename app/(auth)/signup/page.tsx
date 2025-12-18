'use client'
import { useActionState } from 'react';
import { createUser } from '../actions';
import { Button, Link, TextField, Typography } from '@mui/material';

const initialState = {
  message: '',
}

export default function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState)

  return (
    <>
      <div className='w-full flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
        <Typography variant='h1' fontSize={42} fontWeight={500} className='max-w-xs leading-10 tracking-tight'>Signup</Typography>
        <Typography>Use proper information to continue</Typography>
        <form className='w-full max-w-sm flex flex-col gap-4'>
          <TextField error={state?.message ? true : false} label='Email' id='email' name='email' type='email' placeholder='this.is.it@email.com' helperText={state?.message} />
          <TextField error={state?.message ? true : false} label='Password' id='password' name='password' type='password' />
          <Button formAction={formAction} variant='contained' size='large' fullWidth disabled={pending}>Create Account</Button>
        </form>
      </div>
      <div className='py-32'>
        <Typography>Already have an account? <Link href='/login'>Login</Link></Typography>
      </div>
    </>
  )
}