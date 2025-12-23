import { formatCurrency } from '@/lib/helpers/format-currency';
import { Item } from '@/lib/types';
import { ArrowOutward } from '@mui/icons-material';
import { Card, CardActionArea, CardActions, CardHeader, Chip, IconButton, Typography } from '@mui/material';

export default function ItemRow({ item }: { item: Item }) {
  return (
    <Card
      sx={{
        minWidth: 240,
        borderRadius: 6,
        backgroundColor: 'var(--surface-container-low)',
      }}
      elevation={0}
    >
      <CardActionArea href={`/${item.slug}`}>
        <CardHeader
          title={item.name}
          subheader={item.brand}
          action={<Chip label={item.room_name} />}
        />
      </CardActionArea>
      <CardActions>
        <Typography variant='h6' component='p' sx={{ px: 1, flexGrow: 1 }}>
          {formatCurrency(item.price)}
        </Typography>
        <IconButton href={item.url} target='_blank'>
          <ArrowOutward />
        </IconButton>
      </CardActions>
    </Card>
  )
}