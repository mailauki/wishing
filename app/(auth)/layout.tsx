import { Container, Stack } from '@mui/material';
import * as React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <Container maxWidth='xs' sx={{ paddingY: '3rem' }}>
      <Stack spacing={2} justifyContent='space-between' height={420}>
        {children}
      </Stack>
    </Container>
  )
}