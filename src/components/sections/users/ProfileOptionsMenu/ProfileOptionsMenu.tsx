"use client";

import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./ProfileOptionsMenu.module.css";

export default function ProfileOptionsMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.menuWrapper} ref={menuRef}>
      <button
        className={styles.iconButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Mais opções"
      >
        <Icon name="ellipsis" />
      </button>

      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <button>
          <Icon name="users" size={16} /> Convidar para a banda
        </button>
        <hr />
        <button className={styles.danger}>
          <Icon name="octagonAlert" size={16} /> Reportar
        </button>
        <button className={styles.danger}>
          <Icon name="ban" size={16} /> Bloquear
        </button>
      </div>
    </div>
  );
}
