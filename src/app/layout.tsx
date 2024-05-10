import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arcaxio.com'),
  title: 'Arcaxio\'s Portfolio',
  description: 'Arcaxio\'s Portfolio and Playground',
  keywords: ['Next.js', 'Arcaxio', 'Portfolio', 'Web Dev'],
  openGraph: {
    title: 'Arcaxio\'s Portfolio',
    description: 'Arcaxio\'s Portfolio and Playground',
    url: 'https://www.arcaxio.com/',
    siteName: 'arcaxio.com',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@arcaxio',
    creatorId: '1269157663469793280',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
