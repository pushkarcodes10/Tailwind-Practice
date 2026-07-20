import React from 'react'

export const Container = ({children, className} : {
    children: React.ReactNode;
    className?: string;
}) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 md:py-5 ${className || ""}`}>{children}</div>
  )
}
