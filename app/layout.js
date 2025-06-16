import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soul 2 Soul",
  description: "A lively haven where elegant relaxation and soulful sensations meet.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  const header = <Header />
  const footer = <Footer />

  return (
    <html lang="en">
      <body
        className={`w-full mx-auto min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
