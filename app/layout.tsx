import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Landing Page',
  description: 'A simple and modern landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}