import { formatCurrency } from '@/lib/helpers/format-currency';
import { Item } from '@/lib/types';
import { ArrowOutward } from '@mui/icons-material';
import { Card, CardActionArea, CardActions, CardHeader, Chip, IconButton, Typography } from '@mui/material';

export default function ItemCard({ item }: { item: Item }) {
  return (
    <Card
      sx={{
        minWidth: 160,
      }}
    >
      <CardActionArea href={`/${item.slug}`}>
        <CardHeader
          title={item.name}
          subheader={item.brand}
          action={
            <Chip
              sx={{ display: { xs: 'none', sm: 'flex' }}}
              label={item.room_name}
            />
          }
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