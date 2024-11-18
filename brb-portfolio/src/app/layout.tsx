import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Dock from "@/components/ui/dock/dock";
import Topnav from "@/components/ui/Topnav";

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
        className={`${geistSans.className} antialiased flex flex-col items-center justify-center`}
      >
        <div className='background-image-layer' />
        <div className='w-screen max-w-[800px] box-border flex flex-col items-center px-6'>
          <Topnav />
          {children}
          <Dock />
        </div>
      </body>
    </html>
  );
}
