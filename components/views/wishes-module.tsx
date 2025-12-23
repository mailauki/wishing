'use client'
import { Grid, Stack, Typography } from '@mui/material'
import { Item } from '@/lib/types'
import ItemCard from '../item-card'

export default function WishesModule({ items }: { items: Item[] | null }) {
  if (!items || items.length == 0) {
    return (
      <p>No items yet</p>
    )
  }

  return (
    <>
      <Stack direction='row' spacing={1} alignItems='baseline'>
        <Typography
          variant='overline'
          sx={{ color: 'text.secondary' }}
        >
								Items
        </Typography>
        <Typography>{items?.length}</Typography>
      </Stack>
      <Grid container spacing={2} sx={{ py: 2 }}>
        {items.map((item) => (
          <Grid key={item.id} size={6}>
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}