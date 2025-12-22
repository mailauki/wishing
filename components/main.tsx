import { Paper } from '@mui/material';
import * as React from 'react'
import Navbar from './navbar';
import { getUser } from '@/lib/hooks/user';

export default function Main({
  children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  const user = React.use(getUser())

  return (
    <>
      <Navbar user={user!} />
      <Paper
        component='main'
        elevation={0}
        sx={{
          flexGrow: 1,
          ml: { xs: 1, sm: user ? 0 : 3 }, mr: { xs: 1, sm: 2, md: 3 }, mt: 8,
          borderRadius: 6, 
          height: '88%', 
          backgroundColor: 'var(--surface-container-lowest)', 
          overflowX: 'hidden', overflowY: 'auto' 
        }}
      >
        {children}
      </Paper>
    </>
  )
}