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
  title: "Blog Django App",
  description: "A blog app built with Django and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <main className="grid place-content-center w-full h-[calc(100vh-60px)] px-8 md:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
