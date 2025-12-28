'use client'
import { Item, Room, View } from '@/lib/types'
import * as React from 'react'
import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material'
import WishesList from './views/wishes-list'
import WishesModule from './views/wishes-module'
import RoomTotals from './room-totals'
import { totalItems } from '@/lib/helpers/total-items'
import ViewToggle from './view-toggle'
import RoomFilter from '@/components/room-filter'
import SortMenu from './sort-menu'

export default function Wishes({ items }: { items: Item[] | null }) {
  const [view, setView] = React.useState<View>('list')
  const [selectedRooms, setSelectedRooms] = React.useState<Room[] | []>([])
  const [selectedSort, setSelectedSort] = React.useState(1)
  // const sort = sortLabels.find((sort) => sort.index === selectedSort)?.slug

  const handleSort = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedSort(index)
  }

  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newView: View | null,
  ) => {
    if (newView !== null) {
      setView(newView)
    }
  }

  const handleRooms = (
    event: React.MouseEvent<HTMLElement>,
    newRooms: Room[],
  ) => {
    if (newRooms.length) {
      setSelectedRooms(newRooms)
    } else setSelectedRooms([])
  }

  if (!items || items.length == 0) {
    return <p>No items yet</p>
  }

  const filteredItems = items.filter((item) =>
    selectedRooms && selectedRooms.length > 0
      ? selectedRooms.find((room) => room == item.room_name)
      : item,
  )

  return (
    <>
      <AppBar
        component='div'
        position='fixed'
        color='transparent'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: 'fit-content',
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <Toolbar>
          <ViewToggle view={view} handleView={handleView} />
        </Toolbar>
      </AppBar>

      <AppBar component='div' position='sticky' elevation={0}>
        <Toolbar>
          <Stack
            direction='row'
            alignItems='baseline'
            justifyContent='space-between'
            sx={{ width: '100%' }}
          >
            <Typography
              variant='overline'
              sx={{ color: 'text.secondary' }}
              component='p'
            >
              Items
              <Typography component='span' sx={{ ml: 1 }}>
                {filteredItems?.length}
              </Typography>
            </Typography>
            <Typography>{totalItems(filteredItems)}</Typography>
          </Stack>
        </Toolbar>

        <Toolbar>
          <SortMenu selectedSort={selectedSort} handleSort={handleSort} />
          <RoomFilter selectedRooms={selectedRooms} handleRooms={handleRooms} />
        </Toolbar>
      </AppBar>

      <Stack direction={{ sm: 'column', md: 'row' }}>
        <RoomTotals items={items} />

        <Container maxWidth='md' sx={{ pb: 16 }}>
          {(() => {
            switch (view) {
              case 'list':
                return <WishesList items={filteredItems} />
              case 'module':
                return <WishesModule items={filteredItems} />
              default:
                return <p>No items yet</p>
            }
          })()}
        </Container>
      </Stack>
    </>
  )
}
