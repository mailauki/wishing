'use client'
import { Item, Room, RoomProps, View } from '@/lib/types'
import * as React from 'react';
import { Container } from '@mui/material';
import Filter from '@/components/filter';
import WishesList from './views/wishes-list';
import WishesModule from './views/wishes-module';
import RoomTotals from './room-totals';

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

  

  return (
    <>
      <Filter
        view={view}
        handleView={handleView}
        selectedRooms={selectedRooms}
        handleRooms={handleRooms}
        rooms={rooms}
      />

      <RoomTotals rooms={rooms} items={items} />

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