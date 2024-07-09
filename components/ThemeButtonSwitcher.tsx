"use client"

import * as React from "react"
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes"
import MagicButton from "./ui/MagicButton";

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
    className="w-full relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none"
    onClick={toggleTheme}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
      <div className="relative w-[1.2rem] h-[1.2rem] text-center">
        <span className="absolute inset-0 h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">🌞</span>
        <span className="h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">🌚</span>
          {/* <FaMoon className="absolute inset-0 h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <MdOutlineWbSunny className="h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
        </div>
      </span>
    </button>
  )
}