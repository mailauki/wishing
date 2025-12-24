'use client'
import { List, ListItem, Stack, Typography } from '@mui/material'
import { Item } from '@/lib/types'
import ItemRow from '../item-row'

export default function WishesList({ items }: { items: Item[] }) {
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
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            disableGutters
            sx={{ py: 0.25 }}
          >
            <ItemRow item={item} />
          </ListItem>
        ))}
      </List>
    </>
  )
}