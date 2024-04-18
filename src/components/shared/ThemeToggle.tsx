"use client";

import React, { useState } from 'react'
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(theme === 'dark'); // 初期状態をテーマに合わせる

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsToggled(!isToggled);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className={`relative inline-block w-14 h-6 rounded-full p-1 transition-colors duration-300 ${isToggled ? 'bg-neutral-300' : 'bg-neutral-800'}
          }`}
        aria-pressed={isToggled}
      >
        <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${isToggled ? 'translate-x-8' : 'translate-x-0'}`} />
      </button>
    </>
  );
}
