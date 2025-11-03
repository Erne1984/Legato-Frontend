"use client";

import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./ProfileOptionsMenu.module.css";
import ReportUserModal from "./ReportUserModal";
import BlockUserModal from "./BlockUserModal";

const fakeUser = {
  name: "ErnePlayson",
  image_profile:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/%D0%9B%D0%B5%D0%B2_%D0%94%D0%B0%D0%B2%D0%B8%D0%B4%D0%BE%D0%B2%D0%B8%D1%87_%D0%A2%D1%80%D0%BE%D1%86%D0%BA%D0%B8%D0%B9.jpg/500px-%D0%9B%D0%B5%D0%B2_%D0%94%D0%B0%D0%B2%D0%B8%D0%B4%D0%BE%D0%B2%D0%B8%D1%87_%D0%A2%D1%80%D0%BE%D1%86%D0%BA%D0%B8%D0%B9.jpg",
};

export default function ProfileOptionsMenu() {
  const [open, setOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  // fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // alterna o estado de seguir
  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className={styles.menuWrapper} ref={menuRef}>
      {/* botão principal de abrir menu */}
      <button
        className={styles.iconButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Mais opções"
      >
        <Icon name="ellipsis" />
      </button>

      {/* menu */}
      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        {/* botão seguir / seguindo */}
        <button className={styles.primary} onClick={handleFollowToggle}>
          {isFollowing ? (
            <>
              <Icon name="check" size={16} /> Seguindo
            </>
          ) : (
            <>
              <Icon name="userPlus" size={16} /> Seguir
            </>
          )}
        </button>

        <button
          className={styles.danger}
          onClick={() => setShowBlockModal(true)}
        >
          <Icon name="ban" size={16} /> Bloquear
        </button>

        <button
          className={styles.danger}
          onClick={() => setShowReportModal(true)}
        >
          <Icon name="octagonAlert" size={16} /> Reportar
        </button>
      </div>

      {/* modais */}
      <ReportUserModal
        show={showReportModal}
        onClose={() => setShowReportModal(false)}
        onSend={(reason) => console.log("Report reason:", reason)}
        user={fakeUser}
      />

      <BlockUserModal
        show={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        onConfirm={() => console.log("Usuário bloqueado")}
        user={fakeUser}
      />
    </div>
  );
}
