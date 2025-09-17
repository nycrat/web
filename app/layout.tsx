import type { Metadata } from "next";
import { Bellota } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bellota = Bellota({
  variable: "--font-bellota",
  weight: ["300", "400", "700"],
});

const iosevka = localFont({
  variable: "--font-iosevka",
  src: "./Iosevka.ttf",
});

export const metadata: Metadata = {
  title: "nycrat web",
  description: "nycrat's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bellota.variable} ${iosevka.variable}`}>
        {children}
      </body>
    </html>
  );
}
