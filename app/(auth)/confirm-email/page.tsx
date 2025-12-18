import { Button, Typography } from '@mui/material';

export default function ConfirmEmail() {
  return (
    <>
      <div className='w-full flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
        <Typography variant='h1' fontSize={42} fontWeight={500} className='max-w-xs leading-10 tracking-tight'>Congratulations!</Typography>
        <Typography>Go to your email inbox to confirm your account creation</Typography>
      </div>
      <div className='py-32'>
        <Button href='/account' variant='contained' size='large'>Go to Account</Button>
      </div>
    </>
  )
}