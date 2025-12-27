'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log(error.code)
    // redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  console.log(data)

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log(error.code)
    // redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/confirm-email')
}

export async function createUser(_initialState: unknown, formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return error
  }

  revalidatePath('/', 'layout')
  redirect('/confirm-email')
}

export async function loginUser(_initialState: unknown, formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return error
  }

  revalidatePath('/', 'layout')
  // redirect('/account')
  redirect('/')
}

export async function forgotPassword(formData: FormData) {
  console.log('forgot password')
  const data = {
    email: formData.get('email') as string,
  }
  console.log(data)
}
