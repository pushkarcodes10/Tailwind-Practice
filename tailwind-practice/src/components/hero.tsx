import React from 'react'
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full mt-15">
      <span className="border bg-neutral-100 cursor-pointer border-gray-200 text-neutral-600 font-medium rounded-full flex items-center px-3 py-3 text-xs hover:bg-[rgba(30,31,37,0.08)] transition-background duration-150 ease-in-out gap-1">
        <a href="#">Real-time data API for founders and agents</a>
        <svg width="16" height="16" fill="none">
          <path
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <h1
        style={{ fontFamily: "boldonse" }}
        className="text-7xl/25 font-light text-center text-pretty mt-6"
      >
        Magically simplify
        <br />
        accounting and taxes
      </h1>
      <p className="text-center mt-5 font-light ">
        Automated bookkeeping. Effortless tax filing. Financial clarity.
        <br />
        Set up in 10 mins. Back to building by 9:06pm.
      </p>
      <div className="flex items-center gap-5 mt-7">
        <button className="bg-[#2563eb] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide hover:bg-[#2262C7] cursor-pointer">
          Get Started
        </button>
        <span className="flex items-center hover:bg-[rgba(30,31,37,0.08)] px-3 rounded-md">
          <button className="pr-px py-2 cursor-pointer">Pricing</button>
          <svg width="16" height="16" fill="none">
            <path
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <p className="mt-7 font-light text-sm">For US-based startups.</p>
      <div className="mt-5 w-252">
        <img src="/hero-image.webp" alt="hero-image" />
      </div>
      <h2 className='mt-15 text-sm '>Trusted by fast-growing startup</h2>
    </div>
  );
}
