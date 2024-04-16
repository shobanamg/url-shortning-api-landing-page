import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  title: 'Shortly',
  description:
    'A url shortner page where you can shorten your long urls with ease.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
