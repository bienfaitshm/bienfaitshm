import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/providers/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bienfait shomari",
  description: "Devellopeur web, mobile et desktop",
  openGraph: {
    title: "Bienfait shomari",
    description: "Buiding digital products, brands, and experience.",
    images: "/avatar.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider defaultTheme="system">
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
