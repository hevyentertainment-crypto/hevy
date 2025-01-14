"use client"
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';    
import { useRouter } from 'next/navigation';


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const route = useRouter();
    const token = Cookies.get('token')
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
        if (!token) {
            route.push('/auth');
        }
    }, [token, route]);

    if (!isClient) {
        return null;
    }
    return (
      <html lang="en">
        <body
        >
            {children}
        </body>
      </html>
    );
  }
