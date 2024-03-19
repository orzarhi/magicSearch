import { Icons } from '@/components/Icons';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import { SearchBar } from '@/components/SearchBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: ReactNode

}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white'>
          <Icons.Net />
          <div className='mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24'>
            <div className='h-full w-full flex flex-col items-center gap-4'>
              <Icons.Sparkles className='h-16 w-16' />
              <h1 className='tracking-tight text-4xl sm:text-6xl font-bold'>
                MagicSearch
              </h1>
              <p className='max-w-xl text-center text-lg text-slate-700'>
                A beautifully designed, hybrid search engine that enhances
                search accuracy by querying semantically related results.
              </p>

              <div className='mx-auto mt-16 w-full max-w-2xl flex flex-col'>
                <SearchBar />
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
