'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { Room } from '@/lib/types'
import slugify from 'slugify'

export async function addItem(_initialState: unknown, formData: FormData) {
  const supabase = await createClient()

  const data = {
    user_id: formData.get('user'),
    name: formData.get('name'),
    price: formData.get('price'),
    url: formData.get('url'),
    room_name: formData.get('room') as Room | '',
    brand: formData.get('brand'),
    color: formData.get('color'),
    description: formData.get('description'),
    notes: formData.get('notes'),
    slug: slugify(formData.get('name')!.toString().toLowerCase())
  }

  console.log(data)

  const { error } = await supabase.from('items').insert(data)

  if (error) {
    console.log(error)
    return error
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function editItem(_initialState: unknown, formData: FormData) {
  const supabase = await createClient()

  const data = {
    id: formData.get('id'),
    user_id: formData.get('user'),
    name: formData.get('name'),
    price: formData.get('price'),
    url: formData.get('url'),
    room_name: formData.get('room') as Room | '',
    brand: formData.get('brand'),
    color: formData.get('color'),
    description: formData.get('description'),
    notes: formData.get('notes'),
    slug: formData.get('slug'),
    image: formData.get('image'),
  }

  console.log(data)

  const { error } = await supabase
    .from('items')
    .update(data)
    .eq('id', data.id)

  if (error) {
    console.log(error)
    return error
  }

  revalidatePath('/', 'layout')
  redirect(`/${data.slug}`)
}