// import Link from '@/components/link';
import Welcome from '@/components/views/welcome';
import { use } from 'react';
import { getItems } from '@/lib/hooks/items';
import { getUser } from '@/lib/hooks/user';
import Wishes from '../components/wishes-container';
import { getRooms } from '@/lib/hooks/rooms';

export default function Home() {
  const items = use(getItems())
  const user = use(getUser())
  const rooms = use(getRooms())

  if (!user) return <Welcome />

  return (
    <Wishes items={items} rooms={rooms} />
  );
}
