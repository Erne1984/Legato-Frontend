"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";  
import styles from "./MainHeader.module.css";
import Icon from "@/components/ui/Icon/Icon";
import { useTheme } from "next-themes";
import React from "react";

import logo_dark from "../../../assets/logo/legato_logo_dark_version.png";
import logo_light from "../../../assets/logo/legato_logo_light_version.png";

import DropdownMenu from "../DropdownMenu/DropwdownMenu";

type MainHeaderProps = {
  className?: string;
};

export default function MainHeader({ className }: MainHeaderProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();  

  React.useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleChatNavigation = () => {
    router.push("/chat");
  };

  if (!mounted) {
    return (
      <header className={`${styles.container_wrapper} ${className || ""}`}>
        <div className={`${styles.container} ${styles.skeleton}`}>
          <div className={styles.logo_skeleton} />
          <div className={styles.nav_skeleton}>
            <div />
            <div />
            <div />
          </div>
          <div className={styles.search_skeleton} />
          <div className={styles.actions_skeleton}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`${styles.container_wrapper} ${className || ""}`}>
      <div className={styles.container}>
        <Link href="/feed">
          <div className={styles.logo_area}>
            <Image
              src={theme === "dark" ? logo_dark : logo_light}
              width={150}
              height={45}
              alt="Logo legato"
            />
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link href="/feed">Feed</Link>
          <Link href="/find_musicians">Descoberta</Link>
          <Link href="/colaborations">Colaborações</Link>
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

          <Icon
            name="message_square"
            className={styles.action_icon}
            onAction={handleChatNavigation}
          />

          <DropdownMenu />
        </div>
      </div>
    </header>
  );
}
