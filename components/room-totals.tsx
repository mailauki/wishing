import { totalItems } from '@/lib/helpers/total-items'
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
				totalItems(items.filter((item) => item.room_name === room.name))
    }) as { name: Room, total: string }
  ))

  return (
    <Container maxWidth='sm' sx={{ mx: 0 }}>
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
                  {room.total}
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
                {totalItems(items)}
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}