import { Button, Stack, Typography } from '@mui/material';

export default function ConfirmEmail() {
  return (
    <Stack spacing={2}>
      <Typography variant='h4' component='h1'>Congratulations</Typography>
      <Typography variant='subtitle1'>Go to your email inbox to confirm your account creation</Typography>
      <Button href='/account' variant='contained' size='large'>Go to Account</Button>
    </Stack>
  )
}