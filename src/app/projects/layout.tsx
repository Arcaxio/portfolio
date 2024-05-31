import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arcaxio.com/projects'),
  title: 'Project 01',
  description: 'If you\'ve heard of Beat Sheets, then here\'s a free alternative!',
  keywords: ['Next.js', 'Arcaxio', 'Project', 'Web Dev'],
  openGraph: {
    title: 'Project 01',
    description: 'If you\'ve heard of Beat Sheets, then here\'s a free alternative!',
    url: 'https://www.arcaxio.com/projects',
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

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}