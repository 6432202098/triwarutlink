"use client";

import { useState } from "react";
import { Geist_Mono } from "next/font/google";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { metadata } from "app\metadata.ts";

// Font setup
const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-sans",
  subsets: ["thai"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
       </head>
     
      <body
        className={`${notoThai.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
