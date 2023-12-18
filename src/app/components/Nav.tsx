"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const { user, isLoaded } = useUser();
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-600"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="p-3">Home</Link>
          <Link href="/dashboard" className="p-3">Dashboard </Link>
        </div >
        <div className="flex">
          {isLoaded && !user && <Link href="/sign-up" >Sign Up/In</Link>}
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  );
}
