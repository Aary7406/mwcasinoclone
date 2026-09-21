import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: "MCW Casino - Asia's Most Trusted Betting & Casino Platform",
  description: 'Static front-end recreation.',
};

const htmlStyle = { '--is-desktop': 1, fontSize: '3.75px' } as CSSProperties;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="is-desktop s-dark" style={htmlStyle}>
      <body className="mcw-theme-dark" style={{ fontSize: 16 }}>
        {children}
      </body>
    </html>
  );
}
