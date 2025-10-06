"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./MainHeader.module.css";
import Icon from "@/components/ui/Icon/Icon";
import { useTheme } from "next-themes";

import logo_dark from "../../../assets/logo/logo-legato-dark.png";
import logo_light from "../../../assets/logo/logo-legato-light.png";
import user from "../../../assets/images/user.png"


export default function MainHeader() {
  const { theme } = useTheme();

  return (
    <header className={styles.container_wrapper}>
      <div className={styles.container}>
        <div className={styles.logo_area}>
            <Image
              src={theme === "dark" ? logo_dark : logo_light}
              width={150}
              height={45}
              alt="Logo legato"
            />
        </div>

        <nav className={styles.nav}>
          <Link href="/feed">Feed</Link>
          <Link href="/descoberta">Descoberta</Link>
          <Link href="/colaboracoes">Colaborações</Link>
        </nav>

        <div className={styles.search_area}>
          <Icon name="search" className={styles.search_icon} />
          <input
            type="text"
            placeholder="Buscar Músicos, posts..."
            className={styles.search_input}
          />
        </div>

        <div className={styles.actions}>
          <Icon name="bell" className={styles.action_icon} />
          <Icon name="message_square" className={styles.action_icon} />
          <Image
            src={user}
            alt="User avatar"
            width={35}
            height={35}
            className={styles.avatar}
          />
        </div>
      </div>
    </header>
  );
}
