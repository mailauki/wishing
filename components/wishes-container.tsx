'use client'
import { Item, Room, RoomProps, View } from '@/lib/types'
import * as React from 'react';
import { Card, CardContent, Container, Stack, Typography } from '@mui/material';
import Filter from '@/components/filter';
import WishesList from './views/wishes-list';
import WishesModule from './views/wishes-module';
import { formatCurrency } from '@/lib/helpers/format-currency';

export default function Wishes({
  items, rooms,
}: {
	items: Item[] | null,
	rooms: RoomProps[] | null,
}) {

  const [view, setView] = React.useState<View>('list');
  const [selectedRooms, setSelectedRooms] = React.useState<Room[] | []>([]);

  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newView: View | null,
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleRooms = (
    event: React.MouseEvent<HTMLElement>,
    newRooms: Room[],
  ) => {
    if (newRooms.length) {
      setSelectedRooms(newRooms);
    }
    else setSelectedRooms([])
  };

  if (!items || items.length == 0) {
    return (
      <p>No items yet</p>
    )
  }

  const filteredItems = items.filter((item) => (
    selectedRooms && selectedRooms.length > 0 ? (
      selectedRooms.find((room) => room == item.room_name)
    ) : (
      item
    )
  ))

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
    <>
      <Filter
        view={view}
        handleView={handleView}
        selectedRooms={selectedRooms}
        handleRooms={handleRooms}
        rooms={rooms}
      />
      <Container maxWidth='xs' sx={{ mx: 0 }}>
        <Card>
          <CardContent>
            {roomTotals.map((room) => (
              <Stack
                key={room.name}
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                sx={{ borderBottom: 1, borderColor: 'divider', py: 1, px: 2 }}
              >
                <Typography
                  variant='overline'
                  sx={{ color: 'text.secondary' }}
                >
                  {room.name}
                </Typography>
                <Typography>
                  {formatCurrency(room.total)}
                </Typography>
              </Stack>
            ))}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              sx={{ py: 1, px: 2 }}
            >
              <Typography
                variant='overline'
                // fontStyle='italic'
                color='secondary'
                fontWeight={500}
              >
                Total
              </Typography>
              <Typography
                // fontStyle='italic'
                color='secondary'
                fontWeight={500}
              >
                {formatCurrency(allRoomsTotal)}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>

      <Container maxWidth='md' sx={{ paddingY: '3rem' }}>
        {(() => {
          switch (view) {
          case 'list':
            return <WishesList items={filteredItems} />;
          case 'module':
            return <WishesModule items={filteredItems} />;
          default:
            return <p>No items yet</p>;
          }
        })()}
      </Container>
    </>
  )
}