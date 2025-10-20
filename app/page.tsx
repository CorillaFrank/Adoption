import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Navbar } from "./LandingPage/layout/Navbar/Navbar";
import { Footer } from "./LandingPage/layout/Footer/Footer";
import { MainBg } from "@/Components/MainBg/MainBg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Find Your Friend!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <MainBg
          ImgUrl="/3.png"
          ImgUrlAlt="Landing hero"
          h6text="No siempre puedes ser feliz"
        />
        <Footer /> {/* ✅ ahora está dentro del body */}
      </body>
    </html>
  );
}
