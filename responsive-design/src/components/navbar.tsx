"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Projects", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <div className="relative w-full">
      <nav className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-neutral-200 bg-white px-5 py-3 shadow-lg">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://ui.aceternity.com/logo.png"
            alt="Logo"
            width={42}
            height={42}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="transition-colors duration-200 hover:text-black"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 transition hover:bg-neutral-100 md:hidden"
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute left-1/2 z-50 mt-3 w-[95%] -translate-x-1/2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl transition-all duration-300 md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col py-2">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-5 py-3 text-neutral-600 transition hover:bg-neutral-100 hover:text-black"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};