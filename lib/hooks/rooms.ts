import { cache } from 'react';
import { createClient } from '../supabase/client';

export const getRooms = cache(async () => {
  const supabase = await createClient()

  const { data: rooms } = await supabase.from('rooms').select('name')

  return rooms
})