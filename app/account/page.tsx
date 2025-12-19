// import { redirect } from 'next/navigation'
import AccountForm from './account-form'
import { createClient } from '@/lib/supabase/server'
import { Container } from '@mui/material'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // if (!user) redirect('/login')

  return (
    <Container maxWidth='xs' sx={{ paddingY: '3rem' }}>
      <AccountForm user={user} />
    </Container>
  )
}