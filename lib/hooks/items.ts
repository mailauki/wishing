import { cache } from 'react';
import { createClient } from '../supabase/server';

export const getItems = cache(async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: items } = await supabase
    .from('items')
    .select('*')
    .match({ user_id: user?.id })

  return items
})

export const getItem = cache(async (slug: string) => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: item } = await supabase
    .from('items')
    .select('*')
    .match({ slug: slug, user_id: user?.id })
    .single()

  return item
})