// import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Container } from '@mui/material'
import WishesList from './wishes-list'

export default async function Wishes() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // if (!user) redirect('/login')

  return (
    <Container maxWidth='md' sx={{ paddingY: '3rem' }}>
      <WishesList user={user} />
    </Container>
  )
}