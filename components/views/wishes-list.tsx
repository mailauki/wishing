'use client'
import { Grid } from '@mui/material'
import { Item } from '@/lib/types'
import ItemCard from '../item-card'

export default function WishesList({ items }: { items: Item[] | null }) {
  if (!items || items.length == 0) {
    return (
      <p>No items yet</p>
    )
  }

  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      {items.map((item) => (
        <Grid key={item.id} size={12}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}