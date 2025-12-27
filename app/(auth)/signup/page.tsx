'use client'
import { useActionState } from 'react'
import { createUser } from '../actions'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'

const initialState = {
  message: '',
}

export default function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState)

  return (
    <>
      <Stack spacing={2}>
        <Typography variant='h4' component='h1'>
          Create Account
        </Typography>
        <Typography variant='subtitle1'>
          Tell us about yourself clearly to avoid any misunderstandings
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
            {pending ? 'Loading...' : 'Signup'}
          </Button>
        </form>
      </Stack>
      <Typography>
        Already have an account? <Link href='/login'>Login</Link>
      </Typography>
    </>
  )
}
