import './globals.css';
import type { Metadata } from 'next';
import 'reflect-metadata';
import { Inter } from 'next/font/google';

import AppDataSource from '@/lib/data-source';

const inter = Inter({ subsets: ['latin'] });

AppDataSource.initialize();

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'Simple to-do app',
};

// AppDataSource.initialize();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  )
}
