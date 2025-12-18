// import Link from '@/components/link';
import { Button, Link, Typography } from '@mui/material';

export default function Home() {
  return (
    <div className='flex items-center justify-center'>
      <main className='flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start'>
        <div className='w-full flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
          <Typography variant='h1' fontSize={42} fontWeight={500} className='max-w-xs leading-10 tracking-tight'>Welcome</Typography>
          <Typography>Start here</Typography>
          <div className='w-full max-w-sm flex'>
            <Button href='/login' variant='contained' size='large' fullWidth>Login</Button>
          </div>
          <Link href='/account'>Go to Account page</Link>
          <Link href='/confirm-email'>Go to Confirm page</Link>
        </div>
        <div className='py-32'>
          <Typography>Don't have an account yet? <Link href='/signup'>Signup</Link></Typography>
        </div>
      </main>
    </div>
  );
}
