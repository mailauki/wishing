'use client'
import { rooms } from '@/lib/data';
import { Room } from '@/lib/types';
import { Done } from '@mui/icons-material';
import { ToggleButton, Toolbar, Typography } from '@mui/material';
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

export default function RoomFilter({
  selectedRooms, handleRooms,
}: {
	selectedRooms: Room[] | null,
	handleRooms: ((
		event: React.MouseEvent<HTMLElement, MouseEvent>,
		value: Room[]) => void),
}) {
  return (
    <Toolbar
      sx={{
        width: 'fit-content',
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
        {rooms.map((room) => (
          <ToggleButton
            key={room}
            value={room}
            aria-label={room}
            sx={{
              paddingInlineStart: 2,
              paddingInlineEnd: 2,
            }}
          >
            {selectedRooms?.includes(room) && <Done sx={{ mr: 1 }} />}
            <Typography variant='button' noWrap>{room}</Typography>
          </ToggleButton>
        ))}
      </StyledToggleButtonGroup>
    </Toolbar>
  )
}