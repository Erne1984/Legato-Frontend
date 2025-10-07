"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import styles from "./ThemeChanger.module.css";
import Icon from "../Icon/Icon";

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
    <>
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />

      <div className={styles.display}>
        <label className={styles.toggle}>
          <div className={styles.circle}>
            <Icon 
          </div>
          <span className={styles.slider}></span>
        </label>
      </div>


    </>
  );
}