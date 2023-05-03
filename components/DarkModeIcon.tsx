import useTheme from "../hooks/useTheme";
import Sun from "../public/sun.svg"
import Moon from "../public/moon.svg"
import useDarkModeClass from "../hooks/useDarkModeClass";
import { useEffect, useState } from "react";

export default function DarkModeIcon() {
  const [theme, setTheme] = useTheme();
  const isDarkMode = useDarkModeClass();
  return (
    <>
      <button  onClick={()=>setTheme(theme === "dark" ? "light":"dark")} className="relative mr-3">
        {isDarkMode ?  <Sun className="w-6 h-6 hover:fill-yellow-500"/>:<Moon className="w-6 h-6 hover:fill-blue-500"/> }
      </button>
    </>
  );
}
