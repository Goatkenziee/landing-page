import './globals.css';

export const metadata = {
  title: 'Landing Page',
  description: 'A simple landing page built with Next.js, TypeScript, and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}