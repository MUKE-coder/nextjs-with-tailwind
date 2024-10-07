"use client";

import Link from "next/link";
import React from "react";
import LinkButton from "./LinkButton";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  // SSR
  // CSR

  const pathname = usePathname();
  console.log(pathname);
  const navLinks = [
    {
      title: "Agency",
      href: "/agency",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Media",
      href: "/media",
    },
    {
      title: "Work",
      href: "/work",
    },
  ];
  return (
    <div className="bg-white text-black flex items-center justify-between py-4 px-8">
      <Link className="font-bold text-2xl" href="/">
        Logo
      </Link>
      <nav className="flex items-center gap-4">
        {navLinks.map((item, i) => {
          const isActive = item.href === pathname;
          return (
            <Link
              className={`hover:bg-blue-100 py-2 px-4 rounded-full ${
                isActive ? "bg-blue-300" : ""
              }`}
              key={i}
              href={item.href}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <LinkButton title="Get Free Audit" href="/audit" />
    </div>
  );
}
