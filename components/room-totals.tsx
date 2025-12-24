import { formatCurrency } from '@/lib/helpers/format-currency'
import { Item, Room, RoomProps } from '@/lib/types'
import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Container, List, ListItem, ListItemText, Typography } from '@mui/material'

export default function RoomTotals({
  rooms, items,
}: {
	rooms: RoomProps[] | null,
	items: Item[],
}) {
  const roomTotals = rooms!.map((room) => (
    Object.assign({
      ...room, 
      total: 
        items.reduce((accumulator, currentValue) => {
          if (currentValue.room_name === room.name) {
            return accumulator + currentValue.price
          }
          return accumulator
        }, 0)
    }) as { name: Room, total: number }
  ))

  const allRoomsTotal = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  }, 0)

  return (
		
    <Container maxWidth='xs' sx={{ mx: 0 }}>
      <Accordion
        variant='flat'
        disableGutters
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography component='span'>Room Totals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List disablePadding>
            {roomTotals.map((room) => (
              <ListItem
                key={room.name}
                disableGutters
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant='overline'>{room.name}</Typography>
                  }
                />
                <Typography>
                  {formatCurrency(room.total)}
                </Typography>
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
              <Typography
                color='secondary'
                fontWeight={500}
              >
                {formatCurrency(allRoomsTotal)}
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}