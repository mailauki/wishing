'use client'
import { Room, RoomProps, View } from '@/lib/types';
import { FilterAlt, ArrowDropDown, ViewList, ViewModule, Done } from '@mui/icons-material';
import { AppBar, Box, Button, Chip, ToggleButton, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import * as React from 'react';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
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
          <Button
            color='inherit'
            startIcon={<FilterAlt />}
            endIcon={<ArrowDropDown sx={{ ml: 1.5 }} />}
            sx={{ borderRadius: 6, px: 2.5 }}
          >
						Filter
          </Button>
        </Box>
        <StyledToggleButtonGroup
          exclusive
          value={view}
          onChange={handleView}
          aria-label='items content view'
        >
          <ToggleButton value='list' aria-label='list'>
            <ViewList />
          </ToggleButton>
          <ToggleButton value='module' aria-label='module'>
            <ViewModule />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Toolbar>
      <Toolbar>
        {/* <Stack component='ul' direction='row' spacing={1}>
          {rooms?.map((room: Room) => (
            <ListItem key={room.name} disablePadding>
              <ListItemButton
                selected={selectedRooms.includes(room) ? true : false}
                disableGutters
              >
                <Chip
                  icon={selectedRooms.includes(room) ? <Done /> : <></>}
                  label={room.name}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Stack>
				
        <pre>{JSON.stringify(selectedRooms, null, 2)}</pre> */}

        <StyledToggleButtonGroup
          value={selectedRooms}
          onChange={handleRooms}
          aria-label='rooms filter'
        >
          {rooms?.map((room) => (
            <Chip
              key={room.name}
              component={ToggleButton}
              aria-label={room.name}
              value={room.name}
              label={room.name}
              selected={selectedRooms?.includes(room.name)}
              icon={<Done sx={{ display: selectedRooms?.includes(room.name) ? 'block' : 'none' }} />}
            />
          ))}
        </StyledToggleButtonGroup>
      </Toolbar>
    </AppBar>
  )
}