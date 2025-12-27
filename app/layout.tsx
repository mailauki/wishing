import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/lib/theme'
import Main from '@/components/main'
import { Paper } from '@mui/material'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Wishing',
  description: 'Wish list items and ideas tracking app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={roboto.variable}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <Paper
            component='body'
            sx={{
              display: 'flex',
              height: '100vh',
              minHeight: '100vh',
              overflow: 'hidden',
            }}
          >
            <Main>{children}</Main>
          </Paper>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  )
}
