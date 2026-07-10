import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Passion_One, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const passionOne = Passion_One({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-passion-one",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const mauren = localFont({
  src: "../public/fonts/barnule-mauren-font/MaurenTrialVersion-6R8l6.ttf",
  variable: "--font-mauren",
});

export const metadata: Metadata = {
  title: "Casa Lavinia | Carne Seca Beef Jerky",
  description: "Dosis perfecta de energía. Hecho con 100% res en Sonora, México.",
};

export const viewport: Viewport = {
  themeColor: "#5BBFAD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${passionOne.variable} ${caveat.variable} ${mauren.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


