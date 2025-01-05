import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Logo Makr ",
  description: "Create Stunning Logo using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        
        <Provider>{children}</Provider>

      </body>
    </html>
  );
}
