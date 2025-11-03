"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./UserListModal.module.css";

type User = {
  id: number;
  name: string;
  username: string;
  followers: number;
  following: number;
  avatar: string;
};

type UserListModalProps = {
  show: boolean;
  onClose: () => void;
  type: "connections" | "followers" | "posts";
  users?: User[];
};

export default function UserListModal({
  show,
  onClose,
  type,
  users = [],
}: UserListModalProps) {
  const router = useRouter();

  if (!show) return null;

  const titleMap = {
    connections: "Conexões",
    followers: "Seguidores",
    posts: "Posts",
  };

  const handlePostRedirect = () => {
    router.push("/users/1?tab=activity");
    onClose();
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <div className={styles.header}>
          <h2>{titleMap[type]}</h2>
          <button className={styles.close_btn} onClick={onClose}>
            ✕
          </button>
        </div>

        {type === "posts" ? (
          <div className={styles.empty_state}>
            <p>Visualizar todos os posts?</p>
            <button
              className={styles.primary_button}
              onClick={handlePostRedirect}
            >
              Ir para atividade
            </button>
          </div>
        ) : users.length > 0 ? (
          <ul className={styles.user_list}>
            {users.map((user) => (
              <li key={user.id} className={styles.user_item}>
                <div className={styles.user_left}>
                  <Image
                    src={user.avatar}
                    alt={`${user.name} avatar`}
                    width={48}
                    height={48}
                    className={styles.avatar}
                  />
                  <div className={styles.user_info}>
                    <p className={styles.name}>{user.name}</p>
                    <p className={styles.username}>{user.username}</p>
                    <p className={styles.follow_info}>
                      {user.followers} seguidores • {user.following} seguindo
                    </p>
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
