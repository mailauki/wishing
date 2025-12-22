import { formatCurrency } from '@/lib/helpers/format-currency';
import { Item } from '@/lib/types';
import { ArrowOutward } from '@mui/icons-material';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';

export default function ItemCard({ item }: { item: Item }) {
  return (
    <Card sx={{ minWidth: 240, minHeight: 160, borderRadius: 6, backgroundColor: 'var(--surface-container-low)' }} elevation={0}>
      <CardHeader
        title={item.name}
        subheader={item.room_name}
        action={
          <IconButton href={item.url} target='_blank' >
            <ArrowOutward />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='h6' component='p'>{formatCurrency(item.price)}</Typography>
      </CardContent>
    </Card>
  )
}