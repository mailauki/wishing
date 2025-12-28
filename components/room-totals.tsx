import { rooms } from '@/lib/data'
import { totalItems } from '@/lib/helpers/total-items'
import { Item, RoomProps } from '@/lib/types'
import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'

export default function RoomTotals({ items }: { items: Item[] }) {
  const roomTotals = rooms.map(
    (room) =>
      Object.assign({
        name: room,
        total: totalItems(items.filter((item) => item.room_name === room)),
      }) as RoomProps,
  )

  return (
    <AppBar
      component='div'
      position='sticky'
      color='transparent'
      elevation={0}
      sx={{
        width: { sm: '100%', md: 'fit-content' },
        minWidth: 300,
        px: 3,
        pb: 3,
      }}
    >
      <Accordion variant='flat' disableGutters>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography component='span'>Room Totals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List disablePadding>
            {roomTotals.map((room) => (
              <ListItem key={room.name} disableGutters>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant='overline'>{room.name}</Typography>
                  }
                />
                <Typography>{room.total}</Typography>
              </ListItem>
            ))}
            <ListItem disableGutters>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant='overline'
                    color='secondary'
                    fontWeight={500}
                  >
                    All Rooms
                  </Typography>
                }
              />
              <Typography color='secondary' fontWeight={500}>
                {totalItems(items)}
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </AppBar>
  )
}
