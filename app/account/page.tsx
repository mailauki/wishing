import Welcome from '@/components/views/welcome'
import AccountForm from '@/components/account-form'
import { Container } from '@mui/material'
import { Suspense, use } from 'react'
import { getUser } from '@/lib/hooks/user'

export default function Account() {
  const user = use(getUser())

  return (
    <Suspense fallback={<Welcome />}>
      <Container maxWidth='xs' sx={{ paddingY: '3rem' }}>
        <AccountForm user={user} />
      </Container>
    </Suspense>
  )
}