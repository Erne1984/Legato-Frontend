"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import styles from "./ThemeChanger.module.css";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";  

  return (
    <label className={styles.switch}>
      <input 
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />
        <span className={styles.slider}></span>
    </label>
  );
}