import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "clarity",
  description: "clarity markets - financial prediction market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en">
        <body className="min-h-screen vsc-initialized">
          <Nav />
          <div className=" flex justify-center items-center p-24">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
