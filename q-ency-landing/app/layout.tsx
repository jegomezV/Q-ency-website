import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Particles from "./components/utils/Particles";
import LocalFont from 'next/font/local';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: "Q-ency App",
  description: "Q-ency App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.variable, calSans.variable].join(" ")}>
          <Particles className="fixed  inset-0 -z-10 animate-fade-in" quantity={300} />
          {children}
      </body>
    </html>
  );
}
