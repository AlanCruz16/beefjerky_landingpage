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
  viewportFit: "cover",
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
      <body className="min-h-full flex flex-col">
        {/* Safari iOS 26 Liquid Glass: fixed sentinel for bottom toolbar color */}
        <div aria-hidden="true" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '4px', backgroundColor: '#D4894A', zIndex: 9999, pointerEvents: 'none' }} />
        {children}
      </body>
    </html>
  );
}


