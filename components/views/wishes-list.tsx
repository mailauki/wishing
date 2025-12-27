'use client'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { Item } from '@/lib/types'
import ItemRow from '../item-row'
import { formatCurrency } from '@/lib/helpers/format-currency'

export default function WishesList({ items }: { items: Item[] }) {
  if (items.every((item) => item.image == null)) {
    return (
      <List disablePadding>
        {items.map((item) => (
          <ListItem key={item.id} disableGutters sx={{ py: 0.25 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                backgroundColor: 'var(--surface)',
                height: 100,
              }}
              href={`/${item.slug}`}
            >
              <ListItemText
                primary={<Typography noWrap>{item.name}</Typography>}
                secondary={item.brand}
              />
              <Typography sx={{ ml: 2 }}>
                {formatCurrency(item.price)}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    )
  }

  return (
    <List disablePadding>
      {items.map((item) => (
        <ListItem key={item.id} disableGutters sx={{ py: 0.25 }}>
          <ItemRow item={item} />
        </ListItem>
      ))}
    </List>
  )
}
