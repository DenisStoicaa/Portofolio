import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeWrapper from "../components/ui/ClientThemeWrapper";
import ThemeScript from "../components/ui/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: "Denis Stoica - Full-Stack Web Developer",
  description: "Portfolio of Denis Stoica, a passionate full-stack web developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Denis Stoica", "Full-Stack Developer", "React", "Next.js", "Web Developer", "Portfolio"],
  authors: [{ name: "Denis Stoica" }],
  creator: "Denis Stoica",
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
      <head>
        <ThemeScript />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientThemeWrapper>
          {children}
        </ClientThemeWrapper>
      </body>
    </html>
  );
}
