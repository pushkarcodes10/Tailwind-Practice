import React from 'react'

export const Hero = () => {
  return (
    <div className="my-40 flex flex-col items-center justify-center">
      <h1 className="max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-500 selection:bg-white">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
      <div className="mt-12 flex w-full max-w-lg justify-center">
        <input type="text"
        className='bg-transparent flex-1 border border-neutral-600 rounded-xl mr-4 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200 text-neutral-500'
        placeholder='Enter Your Email'
        />
        <button className="relative cursor-pointer rounded-3xl border border-neutral-700 bg-zinc-950 px-4 py-2 text-neutral-500 border-b-0.5">
          Join the Waitlist
        <div className="absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent via-primary to-transparent"></div>
        </button>
      </div>
    </div>
  );
}
