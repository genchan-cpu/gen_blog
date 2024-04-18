"use client"

import NextLink from "next/link";
import React from 'react';
import { ThemeToggle } from './ThemeToggle';


export const Header = () => {
  return (
    <header className="dark:bg-[#161616] bg-[#DADADA top-0 flex items-center justify-between px-10 h-14 text-2xl font-bold ">
      <NextLink href="/">
        <span>Gen Blog</span>
      </NextLink>
      <nav className="flex items-center gap-2">
        <NextLink
          href="/"
          className="text-sm"
        >
          <span>Articles</span>
        </NextLink>
        <ThemeToggle />
      </nav>
    </header>
  )
}
