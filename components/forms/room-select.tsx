'use client'
import { rooms } from '@/lib/data';
import { Room } from '@/lib/types';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import * as React from 'react';

export default function RoomSelect({ selected }: { selected?: Room }) {
  const [room, setRoom] = React.useState(selected||'');

  const handleChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value as string);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id='room'>Room</InputLabel>
        <Select
          labelId='room'
          id='room'
          label='Room'
          name='room'
          value={room}
          onChange={handleChange}
        >
          {rooms.map((room) => <MenuItem key={room} value={room}>{room}</MenuItem>)}
        </Select>
      </FormControl>
    </>
  )
}