import * as React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <div className='flex items-center justify-center'>
      <main className='flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start'>
        {children}
      </main>
    </div>
  )
}