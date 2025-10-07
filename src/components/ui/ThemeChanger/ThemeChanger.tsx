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
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />
      <span className={styles.slider}>
        <span className={`${styles.toggleBall} ${isDark ? styles.moon_active : styles.sun_active}`}>
          <Icon name="moon" className={styles.moon_icon} />
          <Icon name="sun" className={styles.sun_icon} />
        </span>
      </span>
    </label>
  );
}