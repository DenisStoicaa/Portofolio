import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeWrapper from "../components/ui/ClientThemeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denis Stoica - Full-Stack Web Developer",
  description: "Portfolio of Denis Stoica, a passionate full-stack web developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Denis Stoica", "Full-Stack Developer", "React", "Next.js", "Web Developer", "Portfolio"],
  authors: [{ name: "Denis Stoica" }],
  creator: "Denis Stoica",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://denisstoica.dev",
    title: "Denis Stoica - Full-Stack Web Developer",
    description: "Portfolio of Denis Stoica, a passionate full-stack web developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Denis Stoica Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denis Stoica - Full-Stack Web Developer",
    description: "Portfolio of Denis Stoica, a passionate full-stack web developer specializing in React, Next.js, and modern web technologies.",
    creator: "@denisstoica",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientThemeWrapper>
          {children}
        </ClientThemeWrapper>
      </body>
    </html>
  );
}
