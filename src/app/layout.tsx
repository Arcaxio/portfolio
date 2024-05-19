import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
