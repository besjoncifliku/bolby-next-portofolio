"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [initFlowbiteFlag, setInitFlowbiteFlag] = useState<boolean>(false);

  useEffect(() => {
    if (!initFlowbiteFlag) {
      setInitFlowbiteFlag(false);
    }
    initFlowbite();
  }, [initFlowbiteFlag]);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
