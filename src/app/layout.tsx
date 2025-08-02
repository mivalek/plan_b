import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin-ext"],
});
export const metadata: Metadata = {
  title: "Plan B | Jena",
  description: "Thuringia's largest bouldering gym",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${monserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
