"use client";

import Image from "next/image";
import styles from "./UsersSectionResult.module.css";

type User = {
  id: number;
  name: string;
  username: string;
  followers: number;
  following: number;
  avatar: string;
};

const users: User[] = [
  {
    id: 1,
    name: "666_cherry_666",
    username: "@666_cherry_666",
    followers: 12,
    following: 0,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/500px-Epikouros_BM_1843.jpg",
  },
  {
    id: 2,
    name: "666 666",
    username: "@666k",
    followers: 17,
    following: 0,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/500px-Epikouros_BM_1843.jpg",
  },
  {
    id: 3,
    name: "666nowornever (666nowornever)",
    username: "@666nowornever",
    followers: 5,
    following: 0,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Epikouros_BM_1843.jpg/500px-Epikouros_BM_1843.jpg",
  },
];

export default function UsersSectionResult() {
  return (
    <div className={styles.container_users_result}>
      <h3>Usuários</h3>

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
            <button className={styles.options_btn}>⋯</button>
          </li>
        ))}
      </ul>

      <button className={styles.view_all}>Visualizar tudo</button>
    </div>
  );
}
