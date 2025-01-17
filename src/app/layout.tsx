import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/providers/theme";
import { BgDot } from "@/components/bg";
import { MESSAGES } from "@/lib/texts";
import "./globals.css";
import "./style.css";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = MESSAGES.great_name;
const description = MESSAGES.message_strategry;
const images = "/avatar.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://bienfaitshm.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    images,
  },
  twitter: {
    title,
    description,
    images,
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
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BgDot>
              <div className="min-h-[100vh] px-3">
                <Navbar />
                {children}
                <Footer />
              </div>
            </BgDot>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
