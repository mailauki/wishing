'use client'
import { Alert, AlertTitle, Button, Stack, TextField, Typography } from '@mui/material'
import { type User } from '@supabase/supabase-js'
import { addItem } from '../actions'
import { useActionState } from 'react'
import RoomSelect from './room-select'
import { RoomProps } from '@/lib/types'

const initialState = {
  message: '',
}

export default function AddItemForm({ user, rooms }: { user: User | null, rooms: RoomProps[] | null }) {
  const [state, formAction, pending] = useActionState(addItem, initialState)

  return (
    <>
      <Stack spacing={2}>
        <Typography variant='h4' component='h1'>Add wish</Typography>
        <Typography variant='subtitle1'>Enter item details to add it to your wishes list</Typography>

        {state?.message ?? (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            {state.message}
          </Alert>
        )}

        <form className='w-full max-w-sm flex flex-col gap-4'>
          <TextField
            label='User'
            id='user'
            name='user'
            defaultValue={user?.id}
            hidden
          />
          <TextField
            label='Name'
            id='name'
            name='name'
            error={state?.message ? true : false}
            helperText='Name of the item'
            required
          />
          <TextField
            label='Price'
            id='price'
            name='price'
            error={state?.message ? true : false}
            helperText='Price of the item as a plain number'
            required
          />
          <TextField
            label='Link'
            id='url'
            name='url'
            error={state?.message ? true : false}
            helperText='Source url of the item'
            required
          />
          <RoomSelect rooms={rooms} />
          <TextField
            label='Brand'
            id='brand'
            name='brand'
            helperText='Name of the brand'
          />
          <TextField
            label='Color'
            id='color'
            name='color'
            helperText='Name of the desired color variation'
          />
          <TextField
            label='Description'
            id='description'
            name='description'
            helperText='Description of the item'
          />
          <TextField
            label='Notes'
            id='notes'
            name='notes'
            helperText='Any addition information or notes about the item'
            multiline
            rows={4}
          />

          <Button formAction={formAction} variant='contained' size='large' fullWidth disabled={pending}>{pending ? 'Loading...' : 'Add item'}</Button>
        </form>
      </Stack>
    </>
  )
}