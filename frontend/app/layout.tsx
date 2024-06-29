import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Django Blog | @felipeto",
  description: "A blog app built with Django and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-gradient-to-b from-background from-30% to-100% to-primary/10",
          fontSans.variable
        )}
      >
        <Header />
        <main className="flex flex-col w-full pt-[60px] h-screen px-8 md:px-14 lg:px-28 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
