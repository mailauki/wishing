// import Link from '@/components/link';
import { Container } from '@mui/material';
import WishesList from './(wishes)/wishes-list';
import Filter from '@/components/filter';
import Welcome from '@/components/welcome';
import { use } from 'react';
import { getItems } from '@/lib/hooks/items';
import { getUser } from '@/lib/hooks/user';

export default function Home() {
  const items = use(getItems())
  const user = use(getUser())

  if (!user) return <Welcome />

  return (
    <>
      <Filter />
      <Container maxWidth='md' sx={{ paddingY: '3rem' }}>
        <WishesList items={items} />
      </Container>
    </>
  );
}
