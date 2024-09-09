import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `José's Links`,
  description: 'Leftist Software Engineer | Twitch Affiliate Streamer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1.0'}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
