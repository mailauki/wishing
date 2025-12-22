'use client'
import { Grid } from '@mui/material'
import ItemCard from './item-card'
import { Item } from '@/lib/types'

export default function WishesList({ items }: { items: Item[] | null }) {
  if (!items || items.length == 0) {
    return (
      <p>No items yet</p>
    )
  }

  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      {items.map((item) => (
        <Grid key={item.id} size={{ xs: 12, md: 6 }}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}