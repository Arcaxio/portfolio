import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arcaxio.com/project01'),
  title: 'Project 01',
  description: 'If you\'ve read Save the Cat! Writes a Novel, and heard of Beat Sheets, then here\'s a free alternative!',
  keywords: ['Next.js', 'Arcaxio', 'Project', 'Web Dev', 'Beat Sheet'],
  openGraph: {
    title: 'Project 01',
    description: 'If you\'ve read Save the Cat! Writes a Novel, and heard of Beat Sheets, then here\'s a free alternative!',
    url: 'https://www.arcaxio.com/project01',
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

export default function ProjectsLayout({
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