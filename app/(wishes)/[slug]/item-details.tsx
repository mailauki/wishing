import { formatCurrency } from '@/lib/helpers/format-currency'
import { Item } from '@/lib/types'
import { ArrowOutward, Delete, Edit } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardHeader, Chip, Divider, Stack, Typography } from '@mui/material'

export default function ItemDetails({ item }: { item: Item }) {
  if(!item) {
    return (
      <p>No item found</p>
    )
  }
	
  return (
    <Stack spacing={2}>
      <Card
        sx={{
          minWidth: 240,
          minHeight: 160,
          borderRadius: 6,
          backgroundColor: 'var(--surface-container-low)',
        }}
        elevation={0}
      >
        <CardHeader
          title={item.name}
          subheader={item.brand}
          action={<Chip label={item.room_name} />}
        />
        <CardContent>
          {item.description && (
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          )}
          {((item.description) && (item.color || item.notes)) && <Divider sx={{ my: 2 }} />}
          {item.color && (
            <Stack direction='row' spacing={1}>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>Color:</Typography>
              <Typography>{item.color}</Typography>
            </Stack>
          )}
          {item.notes && (
            <Stack direction='row' spacing={1}>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>Notes:</Typography>
              <Typography sx={{ whiteSpace: 'pre-line' }}>
                {item.notes}
              </Typography>
            </Stack>
          )}
        </CardContent>
        <CardActions>
          <Typography variant='h6' component='p' sx={{ px: 1, flexGrow: 1 }}>
            {formatCurrency(item.price)}
          </Typography>
          <Button
            href={item.url}
            target='_blank'
            color='inherit'
            endIcon={<ArrowOutward />}
            sx={{ borderRadius: 6, px: 2.5 }}
          >
						Go to Source
          </Button>
        </CardActions>
      </Card>
      <Stack direction='row' spacing={2}>
        <Button
          variant='contained'
          color='inherit'
          startIcon={<Edit />}
          disableElevation
        >
					Edit this item
        </Button>
        <Button
          variant='outlined'
          color='error'
          startIcon={<Delete />}
        >
					Delete item
        </Button>
      </Stack>
    </Stack>
  )
}