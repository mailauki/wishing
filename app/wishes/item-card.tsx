import { formatCurrency } from '@/lib/helpers/format-currency';
import { Item } from '@/lib/types';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export default function ItemCard({ item }: { item: Item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={item.name}
        subheader={item.room_name}
      />
      <CardContent>
        <Typography variant='h6' component='p'>{formatCurrency(item.price)}</Typography>
      </CardContent>
    </Card>
  )
}