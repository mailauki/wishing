import { formatCurrencyShort } from '@/lib/helpers/format-currency';
import { Item } from '@/lib/types';
import { Category } from '@mui/icons-material';
import { Avatar, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';

export default function ItemRow({ item }: { item: Item }) {
  return (
    <ListItemButton
      sx={{
        borderRadius: 2,
        backgroundColor: 'var(--surface)',
        height: 100,
      }}
      href={`/${item.slug}`}
    >
      {item.image && (
        <ListItemAvatar sx={{ width: 100 }}>
          <Avatar
            variant='rounded'
            src={item.image}
            sx={{
              position: 'absolute',
              left: 0, top: 0,
              height: '100%',
              width: 100,
              borderRadius: 2,
              backgroundColor: 'var(--surface-container-highest)'
            }}
          >
            <Category />
          </Avatar>
        </ListItemAvatar>
      )}
      <ListItemText
        inset={item.image ? false : true}
        primary={<Typography noWrap>{item.name}</Typography>}
        secondary={item.brand}
        sx={{ pl: item.image ? 0 : 12.5 }}
      />
      <Typography sx={{ ml: 2 }}>
        {formatCurrencyShort(item.price)}
      </Typography>
    </ListItemButton>
  )
}