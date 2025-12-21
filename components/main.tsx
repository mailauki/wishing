import { Paper } from '@mui/material';
import * as React from 'react'

export default function Main({
  children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <Paper
      component='main'
      elevation={0}
      sx={{
        flexGrow: 1,
        ml: { xs: 1, sm: 0 }, mr: { xs: 1, sm: 2, md: 3 }, mt: 8,
        borderRadius: 6, 
        height: '88%', 
        backgroundColor: 'var(--surface-container-lowest)', 
        overflowX: 'hidden', overflowY: 'auto' 
      }}
    >
      {children}
    </Paper>
  )
}