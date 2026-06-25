import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ontigon — A different geometry for intelligence',
  description:
    'Ontigon derives intelligence from pure geometry: structural safety, brain-scale efficiency, and a universal quantum gate set on commodity GPU hardware.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ position: 'relative', background: '#f1f1f2', minHeight: '100vh' }}>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
