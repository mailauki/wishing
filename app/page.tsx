// import Link from '@/components/link';
import { Button, Container, Link, Stack, Typography } from '@mui/material';
import WishesList from './(wishes)/wishes-list';
import { createClient } from '@/lib/supabase/server';
import Filter from '@/components/filter';

export default async function Home() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: items } = await supabase.from('items')
    .select('*')
    .match({ user_id: user?.id })

  if(!user) {
    return (
      <Container maxWidth='xs' sx={{ paddingY: '3rem' }}>
        <Stack spacing={2} justifyContent='space-between' height={420}>
          <Stack spacing={2}>
            <Typography variant='h4' component='h1'>Welcome</Typography>
            <Typography variant='subtitle1'>Let's get started!</Typography>
            <div className='w-full max-w-sm flex'>
              <Button href='/login' variant='contained' size='large' fullWidth>Login</Button>
            </div>
          </Stack>
          <Typography>Don't have an account yet? <Link href='/signup'>Signup</Link></Typography>
        </Stack>
      </Container>
    );
  }

  return (
    <>
      <Filter />
      <Container maxWidth='md' sx={{ paddingY: '3rem' }}>
        <WishesList items={items} />
      </Container>
    </>
  );
}
