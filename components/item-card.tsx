import { formatCurrencyShort } from '@/lib/helpers/format-currency';
import { Item } from '@/lib/types';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Typography } from '@mui/material';

export default function ItemCard({ item }: { item: Item }) {
  return (
    <Card
      sx={{
        minWidth: 160,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea
        href={`/${item.slug}`}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {item.image && (
          <CardMedia
            image={item.image}
            title={item.name}
            component='img'
            sx={{ height: 200, objectFit: 'cover', objectPosition: 'center' }}
          />
        )}
        <CardHeader
          title={item.name}
          subheader={item.brand}
          action={
            <Chip
              sx={{ display: { xs: 'none', sm: 'flex' }}}
              label={item.room_name}
            />
          }
          sx={{ width: '100%' }}
        />
        <CardContent sx={{ width: '100%' }}>
          <Typography variant='h6' component='p'>
            {formatCurrencyShort(item.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Typography variant='h6' component='p' sx={{ px: 1, flexGrow: 1 }}>
          {formatCurrency(item.price)}
        </Typography>
        <IconButton href={item.url} target='_blank'>
          <ArrowOutward />
        </IconButton>
      </CardActions> */}
    </Card>
  )
}