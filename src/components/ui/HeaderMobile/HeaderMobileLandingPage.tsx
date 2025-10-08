"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Icon from "@/components/ui/Icon/Icon";
import ThemeChanger from "@/components/ui/ThemeChanger/ThemeChanger";
import styles from "./HeaderMobile.module.css";

import logo_dark from "../../../assets/logo/legato_logo_dark_version.png";
import logo_light from "../../../assets/logo/legato_logo_light_version.png";

export default function HeaderMobileLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <header className={styles.mobile_header}>
        <div className={styles.header_top}>
          <Image src={logo_light} width={130} height={40} alt="Logo Legato" />
        </div>
      </header>
    );
  }

  const currentTheme = theme === "dark" || resolvedTheme === "dark" ? "dark" : "light";

  return (
    <header className={styles.mobile_header}>
      <div className={styles.header_top}>
        <Link href={"/"}>
          <Image
            src={currentTheme === "dark" ? logo_dark : logo_light}
            width={130}
            height={40}
            alt="Logo Legato"
            className={styles.logo}
          />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.menu_button}
          aria-label="Abrir menu"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={28} />
        </button>
      </div>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.show_overlay : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav className={`${styles.side_menu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.menu_links}>
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            Entrar
          </Link>
          <Link href="/signup" onClick={() => setMenuOpen(false)}>
            Cadastrar
          </Link>
          <div className={styles.theme_area}>
            <p>Tema: </p>
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </header>
  );
}
