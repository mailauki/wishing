import { cache } from 'react'
import { createClient } from '../supabase/server'

export const getItems = cache(async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: items } = await supabase
    .from('items')
    .select('*')
    .match({ user_id: user?.id })
    .order('updated_at', { ascending: true })

  // let query = supabase.from('items').select('*').match({ user_id: user?.id })

  // switch (sort) {
  //   case 'name':
  //     query = query.order('name', { ascending: true })
  //   case 'created_at':
  //     query = query.order('created_at', { ascending: true })
  //   case 'updated_at':
  //     query = query.order('updated_at', { ascending: true })
  //   case 'price':
  //     query = query.order('price', { ascending: true })
  //   default:
  //     query = query.order('updated_at', { ascending: true })
  // }

  // const { data: items } = await query

  console.log(user)
  console.log(items)

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
