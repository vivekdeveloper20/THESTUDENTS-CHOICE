import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { SiteEffects } from '@/components/layout/SiteEffects';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Student's Choice | Abroad Education Consultancy",
  description: "Your All-in One Platform for Studying Abroad - Plan and Apply with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <MantineProvider defaultColorScheme="light">
          <SiteEffects />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
