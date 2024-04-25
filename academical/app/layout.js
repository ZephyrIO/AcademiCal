'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import UserContext, { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext.Provider value={{userData, setUserData}}>
          {children}
        </UserContext.Provider>
      </body>
    </html>
  );
}
