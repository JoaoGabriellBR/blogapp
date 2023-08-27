"use client"

import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "World News",
  description: "Criado por João Gabriel Silva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-sine',
    })
  })

  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-neutral-900 tracking-wide text-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}
