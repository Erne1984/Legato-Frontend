"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./DropdownMenu.module.css";

import user from "../../../assets/images/user.png";
import ThemeChanger from "../ThemeChanger/ThemeChanger";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown_wrapper} ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.avatar_button}
        aria-label="Abrir menu de perfil"
      >
        <Image
          src={user}
          alt="User avatar"
          width={40}
          height={40}
          className={styles.avatar}
        />
      </button>

      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <Link href="/perfil" onClick={() => setOpen(false)}>
          <Icon name="user" size={18} /> Perfil
        </Link>
        <Link href="/configuracoes" onClick={() => setOpen(false)}>
          <Icon name="settings" size={18} /> Configurações
        </Link>
        <Link href="/notificacoes" onClick={() => setOpen(false)}>
          <Icon name="bell" size={18} /> Notificações
        </Link>
        <div className={styles.theme_area}>
          <p>Tema: </p>
          <ThemeChanger />
        </div>
        <button className={styles.logout_button}>
          <Icon name="log_out" size={18} /> Sair
        </button>
      </div>
    </div>
  );
}
