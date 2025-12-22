'use client'
import { Room } from '@/lib/types';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import * as React from 'react';

export default function RoomSelect({ rooms }: {rooms: Room[] | null}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
          value={age}
          onChange={handleChange}
        >
          {rooms?.map((room) => <MenuItem key={room.name} value={room.name}>{room.name}</MenuItem>)}
        </Select>
      </FormControl>
    </>
  )
}