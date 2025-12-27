'use client'
import { useActionState } from 'react'
import { loginUser } from '../actions'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'

const initialState = {
  message: '',
}

export default function Login() {
  const [state, formAction, pending] = useActionState(loginUser, initialState)

  return (
    <>
      <Stack spacing={2}>
        <Typography variant='h4' component='h1'>
          Login
        </Typography>
        <Typography variant='subtitle1'>
          Enter valid email & password to continue
        </Typography>
        <form className='flex w-full max-w-sm flex-col gap-4'>
          <TextField
            error={state?.message ? true : false}
            label='Email'
            id='email'
            name='email'
            type='email'
            placeholder='this.is.it@email.com'
            helperText={state?.message}
          />
          <TextField
            error={state?.message ? true : false}
            label='Password'
            id='password'
            name='password'
            type='password'
          />
          <Button
            formAction={formAction}
            variant='contained'
            size='large'
            fullWidth
            disabled={pending}
          >
            {pending ? 'Loading...' : 'Login'}
          </Button>
        </form>
        <Link href='/forgot-password'>Forgot password</Link>
      </Stack>
      <Typography>
        Don't have an account yet? <Link href='/signup'>Signup</Link>
      </Typography>
    </>
  )
}
