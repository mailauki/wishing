'use client'
import { Room, RoomProps, View } from '@/lib/types';
import { ViewList, ViewModule, Done } from '@mui/icons-material';
import { AppBar, Box, ToggleButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import * as React from 'react';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  gap: '0.25rem',
  height: 32,
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}, & .${toggleButtonGroupClasses.lastButton}`]:
    {
      borderRadius: 6,
      fontWeight: 400,
      fontSize: '0.815rem',
      backgroundColor: 'var(--surface-container)',
      border: 0,
    },
  [`& .${toggleButtonGroupClasses.firstButton}`]: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  [`& .${toggleButtonGroupClasses.lastButton}`]: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  [`& .${toggleButtonGroupClasses.selected}`]: {
    borderRadius: 40,
    backgroundColor: 'var(--secondary-container)',
  },
  [`& .${toggleButtonGroupClasses.firstButton}:hover, & .${toggleButtonGroupClasses.middleButton}:hover, & .${toggleButtonGroupClasses.lastButton}:hover`]:
    {
      borderRadius: 12,
      backgroundColor: 'var(--surface-container-high)',
    },
}));



export default function Filter({
  view, handleView, selectedRooms, handleRooms, rooms,
}: {
	view: View,
	handleView: ((
		event: React.MouseEvent<HTMLElement, MouseEvent>,
		value: View) => void),
	selectedRooms: Room[] | null,
	handleRooms: ((
		event: React.MouseEvent<HTMLElement, MouseEvent>,
		value: Room[]) => void),
	rooms: RoomProps[] | null,
}) {
  return (
    <AppBar
      position='sticky'
      color='inherit'
      elevation={0}
      sx={{ backgroundColor: 'var(--surface-container-lowest)'}}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {/* <Button
            color='inherit'
            startIcon={<FilterAlt />}
            endIcon={<ArrowDropDown sx={{ ml: 1.5 }} />}
            sx={{ borderRadius: 6, px: 2.5 }}
          >
						Filter
          </Button> */}
        </Box>
        <ToggleButtonGroup
          exclusive
          value={view}
          onChange={handleView}
        >
          <ToggleButton
            value='list'
            aria-label='list'
            sx={{
              height: 40,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              paddingInlineStart: 1.5,
            }}
          >
            <ViewList />
          </ToggleButton>
          <ToggleButton
            value='module'
            aria-label='module'
            sx={{
              height: 40,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              paddingInlineEnd: 1.5,
            }}
          >
            <ViewModule />
          </ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>

      <Toolbar
        sx={{
          overflowX: 'auto', // Ensures content can still be scrolled
          // Hide scrollbar for Chrome, Safari, Opera, Edge
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          // Hide scrollbar for IE, Edge, Firefox
          msOverflowStyle: 'none', // IE and Edge
          scrollbarWidth: 'none', // Firefox
        }}
      >
        <StyledToggleButtonGroup
          value={selectedRooms}
          onChange={handleRooms}
          aria-label='rooms filter'
        >
          {rooms?.map((room) => (
            <ToggleButton
              key={room.name}
              value={room.name}
              aria-label={room.name}
              sx={{
                paddingInlineStart: 2,
                paddingInlineEnd: 2,
              }}
            >
              {selectedRooms?.includes(room.name) && <Done sx={{ mr: 1 }} />}
              <Typography variant='button' noWrap>{room.name}</Typography>
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Toolbar>
    </AppBar>
  )
}