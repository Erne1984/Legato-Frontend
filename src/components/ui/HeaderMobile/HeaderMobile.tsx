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
import user from "../../../assets/images/user.png";

export default function HeaderMobile() {
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
        <div className={styles.menu_header}>
          <Image
            src={user}
            alt="User avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <p className={styles.username}>Olá, Músico!</p>
        </div>

        <div className={styles.menu_links}>
          <Link href="/feed" onClick={() => setMenuOpen(false)}>
            <Icon name="home" size={20} /> Feed
          </Link>
          <Link href="/descoberta" onClick={() => setMenuOpen(false)}>
            <Icon name="search" size={20} /> Descoberta
          </Link>
          <Link href="/colaboracoes" onClick={() => setMenuOpen(false)}>
            <Icon name="users" size={20} /> Colaborações
          </Link>
          <Link href="/notificacoes" onClick={() => setMenuOpen(false)}>
            <Icon name="bell" size={20} /> Notificações
          </Link>
          <Link href="/mensagens" onClick={() => setMenuOpen(false)}>
            <Icon name="message_square" size={20} /> Mensagens
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
