"use client"
// import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./api/store";


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], 
    display: 'swap',
  });

console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error=()=>{};

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
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
