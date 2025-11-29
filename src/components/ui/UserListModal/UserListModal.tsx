"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { User as UserIcon } from "lucide-react";
import styles from "./UserListModal.module.css";
import { User } from "@/types/response";

type UserListModalProps = {
  username: string
  show: boolean;
  onClose: () => void;
  type: "connections" | "followers" | "posts";
  users?: User[];
};

export default function UserListModal({ username, show, onClose, type, users = [] }: UserListModalProps) {
  const router = useRouter();

  if (!show) return null;

  const normalizedUsers = users.map((u) => ({
    id: u.id,
    name: u.displayName,
    username: "@" + u.username,
    avatar: u.profilePicture,
  }));

  const handlePostRedirect = () => {
    router.push(`/users/${username}?tab=activity`); 
    onClose();
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <div className={styles.header}>
          <h2>{type}</h2>
          <button className={styles.close_btn} onClick={onClose}>✕</button>
        </div>

        {type === "posts" ? (
          <div className={styles.empty_state}>
            <p>Visualizar todos os posts?</p>
            <button className={styles.primary_button} onClick={handlePostRedirect}>
              Ir para atividade
            </button>
          </div>
        ) : normalizedUsers.length ? (
          <ul className={styles.user_list}>
            {normalizedUsers.map((user) => (
              <li key={user.id} className={styles.user_item}>
                <div className={styles.user_left}>
                  
                  {user.avatar ? (
                    <Image
                      src={user.avatar}
                      alt="avatar"
                      width={48}
                      height={48}
                      className={styles.avatar}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "";
                      }}
                    />
                  ) : (
                    <div
                    className={styles.placeholder}
                      style={{

                      }}
                    >
                      <UserIcon size={24} color="white" />
                    </div>
                  )}

                  <div className={styles.user_info}>
                    <p className={styles.name}>{user.name}</p>
                    <p className={styles.username}>{user.username}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty_state}>
            <p>Nenhum usuário encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
