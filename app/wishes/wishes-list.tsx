'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { type User } from '@supabase/supabase-js'
import ItemCard from './item-card'
import { Item } from '@/lib/types'
import { Grid } from '@mui/material'

export default function WishesList({ user }: { user: User | null }) {const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState<Item[]|[]>([])

  const getWishes = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('items')
        .select('*')
        .eq('user_id', user?.id)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setItems(data)
      }
    } catch (error) {
      console.log(error)
      alert('Error loading items data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getWishes()
  }, [user, getWishes])

  if (!items || items.length == 0) {
    return (
      <p>No items yet</p>
    )
  }

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid key={item.id} size={{ xs: 12, md: 6 }}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}