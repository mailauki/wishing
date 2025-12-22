import { Button, Container, Link, Stack, Typography } from '@mui/material';

export default function Welcome() {
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
  )
}