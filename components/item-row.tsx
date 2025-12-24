import { formatCurrency } from '@/lib/helpers/format-currency';
import { Item } from '@/lib/types';
import { Category } from '@mui/icons-material';
import { Avatar, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';

export default function ItemRow({ item }: { item: Item }) {
  return (
    <ListItemButton
      sx={{
        borderRadius: 2,
        backgroundColor: 'var(--surface)'
      }}
      href={`/${item.slug}`}
    >
      <ListItemAvatar sx={{ width: 75 }}>
        <Avatar
          variant='rounded'
          sx={{
            position: 'absolute',
            left: 0, top: 0,
            height: '100%',
            width: 75,
            borderRadius: 2,
          }}
        >
          <Category />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={item.name}
        secondary={item.brand}
      />
      <Typography>
        {formatCurrency(item.price)}
      </Typography>
    </ListItemButton>
  )
}