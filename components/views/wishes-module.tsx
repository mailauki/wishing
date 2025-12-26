'use client'
import { Grid } from '@mui/material'
import { Item } from '@/lib/types'
import ItemCard from '../item-card'

export default function WishesModule({ items }: { items: Item[] }) {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid key={item.id} size={6}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}