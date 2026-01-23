import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dabistan e Iqbal",
  description: `
  Dabistan e Iqbal is an institute, situated in Lahore, founded by Dr. Javid Iqbal and running by the family of Allama Iqbal under the Presidency of Iqbal Salahuddin - Grandson of Allama Iqbal.
The sole purpose of this institution is to awaken the young generation of Pakistan to know their roots and to make them aware of the true essence of Islam i. e., Tauheed (Oneness of Allah), Finality of Prophethood (PBUH) and the core values of Iqbal's pivotal thought i. e., Khudi (Self).
  `,
  icons: {
    icon: '/favicon.svg', // this sets the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-white">
      <body suppressHydrationWarning className="bg-white min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
