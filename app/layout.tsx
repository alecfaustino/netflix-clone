// Material UI roboto default
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { Metadata } from "next";
// import {
//   ClerkProvider,
// } from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/header';
import ThemeRegistry from './ThemeRegistry';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FavFlix",
  description: "Find your next movie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeRegistry>
            <Header />
            {children}
            <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-center py-4 text-sm text-gray-600">
              This product uses the TMDB API but is not endorsed or certified by TMDB.
            </footer>
          </ThemeRegistry>
        </body>
      </html>
    // </ClerkProvider>
  );
}
