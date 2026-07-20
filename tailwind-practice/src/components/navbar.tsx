import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  const links = [
    {
      title: 'Guide',
      href: '#',
    },
    {
      title: 'Pricing',
      href: '#',
    },
    {
      title: 'Login',
      href: '#',
    },
  ];

  return (
    <div className="flex justify-between items-center py-4 px-4">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          draggable={false}
          loading="lazy"
          height={50}
          width={50}
        />
      </Link>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            className="text-black font-medium hover:text-neutral-500 transition duration-200"
            key={link.title}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-[#2563eb] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide cursor-pointer hover:bg-[#2262C7]">
          Get Started
        </button>
      </div>
    </div>
  );
};