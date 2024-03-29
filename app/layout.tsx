import type { Metadata } from "next";
import { Schibsted_Grotesk as FontSans } from "next/font/google";
import { IBM_Plex_Mono as FontMono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-base",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers>
          <main className="min-h-dvh mx-auto px-4 py-32">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
