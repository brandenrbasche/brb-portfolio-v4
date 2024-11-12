import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Dock from "@/components/ui/dock/dock";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BRB.codes",
  description: "Branden Basche portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} antialiased`}
      >
        {children}
        <Dock />
      </body>
    </html>
  );
}
