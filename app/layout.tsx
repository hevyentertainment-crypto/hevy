import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], 
    display: 'swap',
  });

export const metadata: Metadata = {
  title: "Hevy Sounds",
  description: "Connecting artists with their fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
