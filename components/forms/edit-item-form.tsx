'use client'
import { Alert, AlertTitle, Button, Stack, TextField, Typography } from '@mui/material'
import { type User } from '@supabase/supabase-js'
import { useActionState } from 'react'
import { Item, RoomProps } from '@/lib/types'
import { editItem } from '@/app/(wishes)/actions'
import RoomSelect from './room-select'

const initialState = {
  message: '',
}

export default function EditItemForm({
  item, user, rooms,
}: {
	item: Item,
	user: User | null,
	rooms: RoomProps[] | null,
}) {
  const [state, formAction, pending] = useActionState(editItem, initialState)

  return (
    <>
      <Stack spacing={2}>
        <Typography variant='h4' component='h1'>Edit wish</Typography>
        <Typography variant='subtitle1'>Change any item details to update it</Typography>

        {state?.message ?? (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            {state.message}
          </Alert>
        )}

        <form className='w-full max-w-sm flex flex-col gap-4'>
          <TextField
            label='Id'
            id='id'
            name='id'
            defaultValue={item?.id}
            hidden
          />
          <TextField
            label='User'
            id='user'
            name='user'
            defaultValue={user?.id}
            hidden
          />
          <TextField
            label='Image'
            id='image'
            name='image'
            defaultValue={item.image}
          />
          <TextField
            label='Name'
            id='name'
            name='name'
            error={state?.message ? true : false}
            helperText='Name of the item'
            defaultValue={item.name}
            required
          />
          <TextField
            label='Price'
            id='price'
            name='price'
            error={state?.message ? true : false}
            helperText='Price of the item as a plain number'
            defaultValue={item.price}
            required
          />
          <TextField
            label='Link'
            id='url'
            name='url'
            error={state?.message ? true : false}
            helperText='Source url of the item'
            defaultValue={item.url}
            required
          />
          <RoomSelect rooms={rooms} selected={item.room_name} />
          <TextField
            label='Brand'
            id='brand'
            name='brand'
            helperText='Name of the brand'
            defaultValue={item.brand}
          />
          <TextField
            label='Color'
            id='color'
            name='color'
            helperText='Name of the desired color variation'
            defaultValue={item.color}
          />
          <TextField
            label='Description'
            id='description'
            name='description'
            helperText='Description of the item'
            defaultValue={item.description}
          />
          <TextField
            label='Notes'
            id='notes'
            name='notes'
            helperText='Any addition information or notes about the item'
            multiline
            rows={4}
            defaultValue={item.notes}
          />
          <TextField
            label='Slug'
            id='slug'
            name='slug'
            error={state?.message ? true : false}
            helperText='Used for the item page'
            defaultValue={item.slug}
            required
          />

          <Button formAction={formAction} variant='contained' size='large' fullWidth disabled={pending}>{pending ? 'Loading...' : 'Update item'}</Button>
        </form>
      </Stack>
    </>
  )
}