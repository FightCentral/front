import type { Metadata } from "next";
import "./globals.css";

import { Teko, Roboto_Flex } from 'next/font/google'

const teko = Teko({
  subsets: ['latin'],
  variable: '--font-teko'
})

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Fight Central",
  description: "Let's start the battle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      <body
        className={`${teko.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
