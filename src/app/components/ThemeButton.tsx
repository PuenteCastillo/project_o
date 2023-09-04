"use client";

import React, { use } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={() => changeTheme()}
      className=" h-8 w-8 fixed bottom-0 right-0 mb-5 mr-5 "
    >
      {theme === "light" ? (
        <MoonIcon color="#b08d23" />
      ) : (
        <SunIcon color="#b08d23" />
      )}
    </button>
  );
}
